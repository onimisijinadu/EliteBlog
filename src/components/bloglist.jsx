import "/src/main/bloglist.css";
import { Link } from "react-router-dom";
export default function BlogList({ blogs }) {
  return (
    <div className="blog-list">
      <h2> All Blogs </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 200)}</p>
            <p className="author">written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
