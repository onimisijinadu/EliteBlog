import useFetch from "/src/usefetch";
import { useParams } from "react-router-dom";
import "/src/index.css";
import "/src/main/details.css";
export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
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
    </div>
  );
}
