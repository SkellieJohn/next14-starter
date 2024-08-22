"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const deletePost = async (formData) => {
  // "use server";
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const addPost = async (formData) => {
  // "use server";
  // const title= formData.get("title")
  // const desc = formData.get("desc")
  // const slug = formData.get("slug")
  // const userId = formData.get("userId")

  //use destructuring instead
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });

    await newPost.save();
    console.log("post saved to db");
    //reloads the blog page to reflect that a new post has been added, without this nextjs would cache the page and you would not see the updated post immediateley
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  // "use server";

  console.log("in handleGithubLogin");
  await signIn("github");
};

export const handleLogout = async () => {

  await signOut();
};

export const register = async (previousState, formData) => {
  
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords don't match" };
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};

export const login = async ( previousState,formData) => {
  
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);
    
    if (err?.name ==="CredentialsSignin") {
      return {error: "Invalid Username or Password"}
    }
    throw err;
  }
};
