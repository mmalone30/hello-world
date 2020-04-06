import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Container from "../components/container"
export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "atlas-homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
 `)
 return (
    <Layout>
      <Nav></Nav>
      <Container className="container">
        <h1>ATLAS</h1>
        <div class="workExample">
          <ul class="sidebar">
            <li>
              <h4>Company</h4>
              <p>NEXT Trucking</p>
            </li>
            <li>
              <h4>Date</h4>
              <p>July 2019</p>
            </li>
            <li>
              <h4>Role</h4>
              <p>Lead Designer</p>
            </li>
            <li>
              <h4>Industry</h4>
              <p>Logistics</p>
            </li>
            <li>
              <h4>Platform</h4>
              <p>Web</p>
            </li>
          </ul>
          <div class="mainContent">
            <Img fluid={data.imageOne.childImageSharp.fluid} />
            <p>
              I led the design on ATLAS which aims to organize and surface all NEXT Trucking internal proprietary software products into a cohesive, comprehensive software suite. The vision for ATLAS encompasses all internal user goals but the first step focused on a few key tasks and a new navigation to connect everything together.
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
