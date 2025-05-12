import useFetch from "/src/usefetch";
import { Link, useParams } from "react-router-dom";
import "/src/index.css";
import "/src/main/details.css";
import EditBlog from "/src/components/edditBlog";
import { useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: post,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Blog_detail">
      {isPending && <div className="loading"> Loading.......</div>}
      {error && <div className="errors">{error}</div>}
      {post && (
        <article>
          <h1>{post.title}</h1>
          {/*<p className="author">written by {post.author}</p>*/}
          <p>{post.body}</p>
        </article>
      )}
      {/*link to edit post*/}
      {post && (
        <Link to={`/posts/${post.id}/edit`}>
          <button style={{ margin: "10px" }}>Edit Post</button>
        </Link>
      )}
    </div>
  );
}
