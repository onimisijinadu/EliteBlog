import { useState } from "react";
import "/src/main/uploadpost.css";
import { useNavigate } from "react-router-dom";
export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [body, setContent] = useState("");
  //  const [author, setAuthor] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //   const [error, setError] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const blog = { title, body };
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsLoading(false);
      navigate("/");
    });
  };
  return (
    <div className="uploadpost">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog title"
          required
        />
        <textarea
          value={body}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Blog Content"
          required
        ></textarea>
        {/* <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author Name"
          required
        /> */}
        {isLoading ? <button>Adding Blog</button> : <button>Add Blog</button>}
      </form>
    </div>
  );
}

// import { useState } from "react";
// import "/src/main/uploadpost.css";
// import { useNavigate } from "react-router-dom";
// export default function CreateBlog() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [author, setAuthor] = useState("");
//   const [isPending, setIsPending] = useState(false);
//   const history = useNavigate();

//   const Submit = (e) => {
//     e.preventDefault();
//     const blog = { title, content, author };

//     isPending(true);

//     fetch("http://localhost:8000/blogs", {
//       method: "POST",
//       headers: "content-type: application.json",
//       body: JSON.stringify(blog),
//     }).then(() => {
//       alert("Article Added");
//       isPending(false);
//       history("/");
//     });
//   };
//   return (
//     <div className="uploadpost">
//       <form onSubmit={Submit}>
//         <label>Write your Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//         <label>Write your article here </label>
//         <textarea
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           required
//         ></textarea>
//         <label>Author Name</label>
//         <input
//           type="text"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//           required
//         />
//         <button type="submit">Upload Article</button>
//       </form>
//     </div>
//   );
// }
