// import { useState, useEffect } from "react";
import BlogList from "/src/components/bloglist";
import "/src/main/home.css";
import useFetch from "/src/usefetch";
import "/src/index.css";
import About from "/src/components/about";

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
        <div className="home-header">
          <h1>
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span> </span>
            <span>t</span>
            <span>o</span>
            <span> </span>
            <span>E</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span>B</span>
            <span>l</span>
            <span>o</span>
            <span>g</span>
          </h1>
          <p>
            Your go-to platform for insightful articles, expert opinions, and
            engaging discussions. Join our community of passionate writers and
            readers today!
          </p>
          {/* <br /> */}
          <p style={{ backgroundColor: "aliceblue", fontWeight: "600" }}>
            Your one-stop destination for all things blogging. Explore, share,
            and connect with like-minded individuals.
          </p>
        </div>
        {error && <div className="errors">{error}</div>}
        {isPending && <div className="loading"> Loading.......</div>}
        {blogs && <BlogList blogs={blogs} />}
      </div>
      <About />
    </>
  );
}
