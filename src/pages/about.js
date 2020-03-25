import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import Nav from "../components/nav"
import pic from "../../static/pic.png"
export default () => (
  <Layout>
    <Nav></Nav>
    <Container>
      <img src={pic} />
      <p>
        Hi! I'm a digital product designer in Los Angeles, CA. I have a broad skill set in digital
        design—user research, product discovery, rapid prototyping, visual design, and front-end
        engineering. I practice and advocate for <a href="">ethical</a>, <a href="">evidence-based</a>, <a href="">goal-directed design</a> as
        well as Lean Startup-style Build-Measure-Learn practices. My opinions are strong but held loosely.
      </p>
      <p>
        I've been practicing digital design for 10 years. I have a graduate degree in Information Science from
        Indiana University, Bloomington. I've built design systems, research programs, MVPs, enterprise software,
        and consumer products. Been around the block.
      </p>
    </Container>
  </Layout>
)
