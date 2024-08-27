import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Be the first to know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
        <div className="footer-section">
          <h3>Currency</h3>
          <p>USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <div className="link-column">
            <h4>mettā muse</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>EU Compliances Docs</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Join/Login as a Seller</h4>
            <ul>
              <li><a href="#">Join as a Seller</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          {/* Add social media icons/links here */}
        </div>
      </div>
      <div className="footer-copy">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
