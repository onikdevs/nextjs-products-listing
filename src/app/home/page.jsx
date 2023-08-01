import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://cdn.pixabay.com/photo/2016/09/05/18/26/board-1647323_1280.jpg"
          className="max-w-sm rounded-lg shadow-2xl" alt="image-loading"
        />
        <div>
          <h1 className="text-5xl font-bold">Products Listing Next Js</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link className="btn btn-primary" href="/posts">Products</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
