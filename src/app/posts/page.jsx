import React from "react";
import Link from "next/link";

import ScrollToTop from "@/components/ScrollTop";

export default async function page() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const posts = data.products.slice(0, 30);
  return posts.map((post) => {
    return (
      <>
        <ScrollToTop />
        <div className="card w-96 bg-base-100 shadow-lg my-4 mx-auto">
          <div className="card-body">
            <h2 className="card-title">{post.title}</h2>
            <p>{post.description}</p>
            <div className="card-actions justify-end mt-4">
              <Link className="btn btn-primary" href={`/posts/${post.id}`}>
                See Deatails
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
}
