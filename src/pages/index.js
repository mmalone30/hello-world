import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Container from "../components/container"
import Header from "../components/header"
import Work from "../components/work"
export default () => (
  <Layout>
    <Nav></Nav>
    <Container className="container">
      <h1>Mitch Malone is a digital product designer in Los Angeles, CA.</h1>
      <Work></Work>
    </Container>
  </Layout>
)
