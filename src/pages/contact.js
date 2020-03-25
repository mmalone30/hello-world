import React from "react"
import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import Nav from "../components/nav"
import { Link } from "gatsby"
export default () => (
  <Layout>
    <Nav></Nav>
    <Container>
      <p>
        <Link to="mailto:mitch@mitchmaloneonline">mitch@mitchmaloneonline.com</Link>
      </p>
      <p>
        <Link to="twitter.com">Twitter</Link>
      </p>
      <p>
        <Link to="linkedin.com">LinkedIn</Link>
      </p>
      <p>
        <Link to="dribbble.com">Dribbble</Link>
      </p>
    </Container>
  </Layout>
)
