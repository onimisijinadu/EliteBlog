import { useState } from "react";
import "/src/main/bloglist.css";
import { Link } from "react-router-dom";
export default function BlogList({ blogs }) {
  //Setting a page limit so that only the total of 10 blogs display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPage = currentPage * postsPerPage;
  const indexOfFirstPage = indexOfLastPage - postsPerPage;
  const currentblogs = blogs.slice(indexOfFirstPage, indexOfLastPage); //the current post should beging from the index of first page to the index of last page

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="blog-list">
      <h2> All Posts </h2>
      {currentblogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 200)}</p>
            <p className="author">written by {blog.author}</p>
          </Link>
        </div>
      ))}
      <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
}

// import { useState } from "react";
// import "/src/main/bloglist.css";
// import { Link } from "react-router-dom";

// export default function BlogList({ posts = [] }) {
//   // Default posts to empty array to avoid undefined errors
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 10;

//   // Calculate total pages
//   const totalPages = Math.ceil(posts.length / postsPerPage);

//   // Determine slice indices
//   const indexOfLastPage = currentPage * postsPerPage;
//   const indexOfFirstPage = indexOfLastPage - postsPerPage;

//   // Slice posts for current page
//   const currentPosts = posts.slice(indexOfFirstPage, indexOfLastPage);

//   // Handlers with bounds checking
//   const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const handleNext = () =>
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (!posts.length) {
//     return <p>No posts available.</p>;
//   }

//   return (
//     <div className="post-list">
//       <h2>All Posts</h2>

//       {currentPosts.map((post) => (
//         <div className="blog-preview" key={post.id}>
//           <Link to={`/posts/${post.id}`}>
//             <h3>{post.title}</h3>
//             <p>{post.body.slice(0, 200)}...</p>
//             {/* Uncomment if author is available */}
//             {/* <p className="author">Written by {post.author}</p> */}
//           </Link>
//         </div>
//       ))}

//       <div className="pagination-controls">
//         <button onClick={handlePrev} disabled={currentPage <= 1}>
//           Prev
//         </button>

//         {/* Page number buttons */}
//         {Array.from({ length: totalPages }, (_, idx) => (
//           <button
//             key={idx + 1}
//             className={currentPage === idx + 1 ? "active" : ""}
//             onClick={() => paginate(idx + 1)}
//           >
//             {idx + 1}
//           </button>
//         ))}

//         <button onClick={handleNext} disabled={currentPage >= totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }
