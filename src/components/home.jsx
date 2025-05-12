// import { useState, useEffect } from "react";
import BlogList from "/src/components/bloglist";
import "/src/main/home.css";
import useFetch from "/src/usefetch";
import "/src/index.css";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/onimisijinadu/EliteBlog/blogs/"
  );

  return (
    <>
      <div className="home">
        {error && <div className="errors">{error}</div>}
        {isPending && <div className="loading"> Loading.......</div>}
        {blogs && <BlogList blogs={blogs} />}
        {/* <h1>Welcome to Elite Blog</h1>
          <p>Your one-stop destination for all things blogging.</p>
          <p>Explore, share, and connect with like-minded individuals.</p> */}
      </div>
    </>
  );
}
