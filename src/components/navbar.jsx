import "/src/main/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="blogname">
        <span className="red">Elite</span>
        <span className="white">Blog</span>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/create">
          <button>Upload blog</button>
        </a>
      </div>
    </div>
  );
}
