import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";
// import './minireset.min.css'
import './index.css'

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <img className="brand-logo" src="/logos/logo.svg" alt="ngraton.com logo" />
      {children}
    </div>
  );
}
