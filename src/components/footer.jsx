import { Link } from "react-router-dom";
import "/src/main/home.css";
export default function () {
  return (
    <div className="footer">
      <section className="footer-header">
        <p>
          With EliteBlog, you’re not just publishing, you’re crafting a digital
          experience <em>Become part of the elite.</em>
        </p>
        <div className="footer-quicklinks">
          <h5>Quick links</h5>
          <Link to="/EliteBlog/">Home</Link>
          <Link to="#about">About</Link>
          <Link to="/create">Create Post</Link>
        </div>
        <div className="footer-contacts">
          <h5>Contact Us</h5>
          <Link to="">Facebook</Link>
          <Link to="">X</Link>
          <Link to="">Instagram</Link>
        </div>
      </section>

      <div className="copyright">&copy; EliteBlog 2025</div>
    </div>
  );
}
