import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './Intro.css'

export default function Intro() {
  return (
    <div className="intro">
    <StaticImage className="wallpaper" src="../../static/images/cleveland.jpeg"/>
      <h1>
        Edit About component or pages/about.jsx to include your information.
      </h1>
    </div>
  )
}

