import { useState, useEffect } from "react";
import "/src/main/uploadpost.css";
import { useNavigate, useParams } from "react-router-dom";

export default function EditBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/onimisijinadu/EliteBlog/blogs/${id}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const updatedBlog = { title, content, author };

    fetch(
      `https://my-json-server.typicode.com/onimisijinadu/EliteBlog/blogs/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedBlog),
      }
    ).then((res) => {
      console.log("Post successfully edited");
      setIsLoading(false);
      navigate("/EliteBlog/");
    });
  };
  return (
    <div className="uploadpost">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post Content"
          required
        ></textarea>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Saving....." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
