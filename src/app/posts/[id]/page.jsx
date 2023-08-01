import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const post = await res.json();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex flex-col">
        <img
          src={`${post.thumbnail}`}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="image-loading"
        />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{post.title}</h1>
          <p className="py-6">{post.description}</p>
          <p className="py-6">price: {post.price}</p>
          <p className="py-6">discountPercentage: {post.discountPercentage}</p>
          <p className="py-6">stock: {post.stock}</p>
          <Link className="btn btn-primary" href={"/posts"}>
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
