import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import './About.css'

export default function Intro() {

  const [animationComplete, setAnimationComplete] = React.useState(false)

  return (
    <div className="about">
      <div className="content">
        <aside className="side">
          <div className="picture">
            <div className="picture-shadow" />
            <StaticImage
              className="me"
              src="../../../static/images/me.jpg"
              loading="eager"
              height={400}
              width={400}
              alt="me"
            />
          </div>
        </aside>
        <div className="about-div">
          <div className="about-text"/>
          <p id="about-line-1">
            <span id="about-hi">Hi. </span><span id="about-i-am">I&apos;m Nic.</span>
          </p>
          <p id="about-line-2">I&apos;m a software engineer and maker. </p>
          <p id="about-line-3" onAnimationEnd={() => setAnimationComplete(true)}>Welcome to my virtual workshop. </p>
        </div>
        <div className={animationComplete ? 'arrow' : ''}>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </div>
  )
}
