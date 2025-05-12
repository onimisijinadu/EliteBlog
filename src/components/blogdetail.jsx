import useFetch from "/src/usefetch";
import { Link, useParams } from "react-router-dom";
import "/src/index.css";
import "/src/main/details.css";
import EditBlog from "/src/components/edditBlog";
import { useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch(
    "https://my-json-server.typicode.com/onimisijinadu/EliteBlog/blogs/" + id
  );
  return (
    <div className="Blog_detail">
      {isPending && <div className="loading"> Loading.......</div>}
      {error && <div className="errors">{error}</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p className="author">written by {blog.author}</p>
          <p>{blog.content}</p>
        </article>
      )}
      {/*link to edit blog*/}
      {blog && (
        <Link to={`/blogs/${blog.id}/edit`}>
          <button style={{ margin: "10px" }}>Edit blog</button>
        </Link>
      )}
    </div>
  );
}
