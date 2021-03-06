import React from "react";
import { Link } from "gatsby";

function PostListing({ postEdges }) {
  const postList = []
  postEdges.forEach((postEdge) => {
    postList.push({
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.fields.date,
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead,
    })
  })

  return (
    <div>
      {
        postList.map((post) => (
          <Link to={post.path} key={post.title}>
            <h3>{post.title}</h3>
          </Link>
        ))
      }
    </div>
  )
}

export default PostListing
