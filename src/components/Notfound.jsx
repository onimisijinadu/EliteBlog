import "/src/main/home.css";
export default function Notfound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/EliteBlog/">Go to Home</a>
    </div>
  );
}
