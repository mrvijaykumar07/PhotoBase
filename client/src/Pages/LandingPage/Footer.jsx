import React from "react";
import { Link } from "react-router-dom";
import playstoreImage from "../../assets/images/icons/social/google-play-icon.png";
import appStoreImage from "../../assets/images/icons/social/app-store-icon.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-16 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand + App Download */}
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-3">Samaro.ai</h2>
          <p className="text-sm mb-4 leading-relaxed">
            World's first AI powered event experiences platform.
          </p>
          <p className="mb-3 font-medium">Get the mobile app:</p>
          <div className="flex gap-3">
            <a href="playstoreLink" target="_blank" rel="noreferrer">
              <img src={playstoreImage} alt="Google Play" className="w-32" />
            </a>
            <a href="appstoreLink" target="_blank" rel="noreferrer">
              <img src={appStoreImage} alt="App Store" className="w-32" />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h5 className="text-amber-500 font-semibold mb-4">Product</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/product/website">Website</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/support/chat">Chat Support</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/schedule-demo">Schedule Demo</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-amber-500 font-semibold mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/feature-request">Feature Request</Link></li>
            <li><Link to="/comparison">Comparison</Link></li>
            <li><Link to="/report-bug">Report Bug</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-amber-500 font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Get in Touch</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; 2025 Samaro.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
