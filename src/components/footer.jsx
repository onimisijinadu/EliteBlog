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
          <a href="/EliteBlog/">Home</a>
          <a href="#about">About</a>
          <a href="/EliteBlog/create">Create Post</a>
        </div>
        <div className="footer-contacts">
          <h5>Contact Us</h5>
          <a href="">Facebook</a>
          <a href="">X</a>
          <a href="">Instagram</a>
        </div>
      </section>

      <div className="copyright">&copy; EliteBlog 2025</div>
    </div>
  );
}
