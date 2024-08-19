import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";



export const deletePost = async(formData) => {
    "use server"
    const {id} = Object.fromEntries(formData)
    try {
       connectToDb();
       await Post.findByIdAndDelete(id);
       revalidatePath("/blog");
    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
}

export const addPost = async(formData) => {
    "use server"
    // const title= formData.get("title")
    // const desc = formData.get("desc")
    // const slug = formData.get("slug")
    // const userId = formData.get("userId")

    //use destructuring instead
    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try {
       connectToDb();
       const newPost = new Post({title, desc, slug, userId}); 

       await newPost.save();
       console.log("post saved to db")
       //reloads the blog page to reflect that a new post has been added, without this nextjs would cache the page and you would not see the updated post immediateley
       revalidatePath("/blog");

    } catch (error) {
        console.log(error)
        return {error: "Something went wrong"}
    }
};


