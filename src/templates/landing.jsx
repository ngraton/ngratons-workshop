import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../layout"
import PostListing from "../components/PostListing/PostListing"
import SEO from "../components/SEO/SEO"
import Intro from "../components/Intro/Intro"
import config from "../../data/SiteConfig"

export default function Landing({ data }) {
  const postEdges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Intro />
        <div className="posts-container">
          <PostListing postEdges={postEdges} />
        </div>
    </Layout>
  )
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
