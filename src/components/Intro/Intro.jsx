import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import './Intro.css'

export default function Intro() {

  const [animationComplete, setAnimationComplete] = React.useState(false)

  return (
    <div className="intro">
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
        <div className="intro-div">
          <div className="intro-text"/>
          <p id="intro-line-1">
            <span id="intro-hi">Hi. </span><span id="intro-i-am">I&apos;m Nic.</span>
          </p>
          <p id="intro-line-2">I&apos;m a software engineer and maker. </p>
          <p id="intro-line-3" onAnimationEnd={() => setAnimationComplete(true)}>Welcome to my virtual workshop. </p>
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
