"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {

  
  // CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathname = usePathname();
  // gets the query params after the url ie he value of the query param q
  // http://localhost:3000/navigationtest?q=test
  const searchParams = useSearchParams();

  const q = searchParams.get("q");

  console.log(q);

  const handleClick = () => {
    console.log("clicked");
    router.forward();
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
