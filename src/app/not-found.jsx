import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This page could not be found.</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export default NotFound;
