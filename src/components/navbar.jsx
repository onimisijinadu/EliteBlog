import { useState } from "react";
import "/src/main/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="blogname">
        <span className="red">Elite</span>
        <span className="white">Blog</span>
      </div>
      {/* mobile navigation */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
      </div>
      {/* mobile navigation */}
      <div className={`mobile_nav ${isOpen ? "open" : ""}`}>
        <Link to="/EliteBlog/">Home</Link>
        <Link to="#about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create">
          <button>Upload blog</button>
        </Link>
      </div>
      <div
        className={`mobile_overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* desktop navigation */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="#about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/create">
          <button>Upload blog</button>
        </Link>
      </div>
    </div>
  );
}
