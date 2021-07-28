import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

function SocialLinks({ postNode, postPath }) {
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, config.pathPrefix, postPath);


  return (
    <div className="social-links">
      <LinkedinShareButton
        url={url}
        title={post.title}
        description={postNode.excerpt}
      >
        <img className="social-icon" src="/logos/linkedin_logo.svg" alt="linkedin icon" />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={post.title}
      >
        <img
          className="social-icon"
          src="/logos/reddit_icon.svg"
          alt="reddit icon"
        />
      </RedditShareButton>
      <TwitterShareButton
        url={url}
        title={post.title}
      >
        <img
          className="social-icon"
          src="/logos/twitter_icon.svg"
          alt="twitter icon"
        />
      </TwitterShareButton>
      <FacebookShareButton
        url={url} quote={postNode.excerpt}
      >
        <img
          className="social-icon"
          src="/logos/facebook_icon.svg"
          alt="facebook icon"
        />
      </FacebookShareButton>
    </div>
  );
}

export default SocialLinks;
