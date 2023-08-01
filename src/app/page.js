import HomePage from "@/app/home/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-4xl text-center font-bold mt-5">
      <h1>Tap on the Products To See Listing</h1>
      <Link className="btn btn-primary mt-5" href="/posts">
        Products
      </Link>
    </div>
  );
}
