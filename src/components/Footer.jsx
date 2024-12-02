import React from "react";
import "./Footer.css"; // Import Footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Resume Critique Tool. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
