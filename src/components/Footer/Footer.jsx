import React from "react";
import UserLinks from "../UserLinks/UserLinks";

function Footer({ config }) {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <footer className="footer">
      <div className="notice-container">
        <div>
          <UserLinks config={config} labeled />
        </div>
        <h4>{copyright}</h4>
      </div>
    </footer>
  );
}

export default Footer;
