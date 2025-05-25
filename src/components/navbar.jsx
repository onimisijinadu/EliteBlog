import { useState } from "react";
import "/src/main/navbar.css";
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
        <a href="/EliteBlog/">Home</a>
        <a href="#about">About</a>
        <a href="/EliteBlog/contact">Contact</a>
        <a href="/EliteBlog/create">
          <button>Upload blog</button>
        </a>
      </div>
      <div
        className={`mobile_overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* desktop navigation */}
      <div className="navbar-links">
        <a href="/EliteBlog/">Home</a>
        <a href="#about">About</a>
        <a href="/EliteBlog/contact">Contact</a>
        <a href="/EliteBlog/create/">
          <button>Upload blog</button>
        </a>
      </div>
    </div>
  );
}
