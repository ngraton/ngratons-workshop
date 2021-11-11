import React from "react"
import { Link } from "gatsby";

function UserLinks({ config }) {
  const { userLinks } = config
  if (!userLinks) {
    return null
  }

  function getLinkElements() {

    return userLinks.map((link) => (
      <a href={link.url} key={link.label}>
        <button type="button" className="icon">
          <img className="social-icon" src={`/logos/${link.label}.svg`} alt={link.label} />
        </button>
      </a>
    ))
  }

  const rssURL = config.siteRss

  return (
    <div className="user-links">
      <Link to={rssURL}>
        <button type="button" className="icon">
          <img className="social-icon" src="/logos/rss.svg" alt="rss" />
        </button>
      </Link>
      {getLinkElements()}
    </div>
  )}

export default UserLinks
