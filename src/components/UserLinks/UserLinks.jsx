import React from "react"
import { Link } from "gatsby";

function UserLinks({ config, labeled }) {
  const { userLinks } = config
  if (!userLinks) {
    return null
  }

  function getLinkElements() {

    return userLinks.map((link) => (
      <a href={link.url} key={link.label}>
        <button type="button">{labeled ? link.label : ""}</button>
      </a>
    ))
  }

  const rssURL = config.siteRss

  return (
    <div className="user-links">
      <Link to={rssURL}>
        <button type="button">Subscribe</button>
      </Link>
      {getLinkElements()}
    </div>
  )}

export default UserLinks
