import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Box from '../Box/Box'


function Projects() {
  const data = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                project
              }
            }
          }
        }
      }
    `
  )

  const projects = []
    data.allMarkdownRemark.edges.forEach((edge) => {
      if (!projects.includes(edge.node.frontmatter.project)) {
        projects.push(edge.node.frontmatter.project)
      }
    })

  const projectList = projects.map((project) => (
      <p key={project}>{project}</p>
    )
  )

  return (
    <Box title='Projects'>
      <div>
        {projectList}
      </div>
    </Box>
  )
}

export default Projects
