import React from "react"
import Homepage from "../components/homepage"

import Container from "../components/container"
import Header from "../components/header"
import Work from "../components/work"
import Pic from "../components/pic"
import { Link } from "gatsby"
export default () => (
  <>
    <Homepage>
      <Container className="container">
        <h1>Mitch Malone is a digital product designer in Los Angeles, CA.</h1>
        <h2>Selected Work</h2>
        <Work></Work>

      </Container>
    </Homepage>
    <Homepage>
      <Container className="container">

        <div class="about_section">
          <Pic></Pic>
          <div class="about_section-content">
            <h2>Hi, friend.</h2>
            <p>
              I'm a digital product designer in Los Angeles, CA. I have a broad skill set in digital
              design—user research, product discovery, rapid prototyping, visual design, and front-end
              engineering. I practice and advocate for <a href="">ethical</a>, <a href="">evidence-based</a>, <a href="">goal-directed design</a> as
              well as Lean Startup-style Build-Measure-Learn practices. My opinions are strong but held loosely.
            </p>
            <p>
              I've been practicing digital design for 10 years. I have a graduate degree in Information Science from
              Indiana University, Bloomington. I've built design systems, research programs, MVPs, enterprise software,
              and consumer products. Been around the block.
            </p>
            <ul class="links">
              <li>
                <Link to="mailto:mitch@mitchmaloneonline.com">mitch@mitchmaloneonline.com</Link>
              </li>
              <li>
                <Link to="https://twitter.com/mitchmalo">Twitter</Link>
              </li>
              <li>
                <Link to="linkedin.com">LinkedIn</Link>
              </li>
              <li>
                <Link to="dribbble.com">Dribbble</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Homepage>
  </>
)
