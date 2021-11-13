import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../layout"
import SEO from "../components/SEO/SEO"
import Intro from "../components/Intro/Intro"
import Projects from "../components/Projects/Projects"
import config from "../../data/SiteConfig"

export default function Landing() {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <div className="landing">
        <Intro />
        <Projects />
      </div>
    </Layout>
  )
}
