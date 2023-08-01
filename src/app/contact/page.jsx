import OnclickAlert from "@/components/OnclickAlert";
import React from "react";

function Posts() {
  /* async function GET() {
    await fetch("https://jsonplaceholder.typicode.com/posts");
  }
  const res = res.json();
  const posts = res.slice(0, 10); */

  return (
    <>
      <h1>click to see an alert</h1>
      <OnclickAlert/>
    </>
  );
}

export default Posts;
