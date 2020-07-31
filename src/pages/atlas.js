import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Container from "../components/container"
import next from "../../static/next.svg"
export default () => {
  const data = useStaticQuery(graphql`
    query {
      atlashomepage: file(relativePath: { eq: "atlas-homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      persona: file(relativePath: { eq: "persona.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
 `)
 return (
  <div>
  <header>
    <Nav></Nav>
    <Container className="container">
      <h2>ATLAS Freight</h2>
      <h3>Improving the user experience with a more coherent and intentional information architecture</h3>
      <div class="workDetails">
        <h4>Company</h4>
        <p>NEXT Trucking</p>
      </div>
      <div class="workDetails">
        <h4>Timeline</h4>
        <p>May 2020 &ndash; now</p>
      </div>
      <div class="workDetails">
        <h4>Team</h4>
        <p>1 PM, 1 Designer, 4 Engineers</p>
      </div>
      <div class="workDetails">
        <h4>My Contributions</h4>
        <p>Product discovery, user research, interaction design, visual design</p>
      </div>
    </Container>
  </header>
  <div class="workExample">
    <div class="mainContent">
      <Img fluid={data.atlashomepage.childImageSharp.fluid} />
      <section>
        <p class="lead">
          I led the design on ATLAS which aims to organize and surface all NEXT Trucking internal proprietary software products into a cohesive, comprehensive software suite. The vision for ATLAS encompasses all internal user goals but the first step focused on a few key tasks and a new navigation to connect everything together.
        </p>
        <h3>Background</h3>
        <p>
          In 2018, NEXT Trucking was born. It’s mission was to create something that never existed before—a digital app-based marketplace for truckers to find work bound to and from the ports of Los Angeles. At the time, the way truckers found work was through brokers who knew shippers bringing containers into terminals and could connect them with work. When the truckers had completed the job—picking up a container and delivering it to a warehouse farther inland—the trucker would get paid, the shipper invoiced, and the broker would receive a cut.
        </p>
        <p>
        NEXT has a vision for a disintermediated trucking marketplace, similar to Airbnb. Shippers can post their jobs that truckers can complete and get paid. On the surface, it looks like a fairly clean transaction. But in reality, it’s much more complicated.
        </p>
        <h3>The Problem</h3>
        <p>
          Servicing a container is incredibly complicated. The goal is simple enough—get a container from a port, deliver it to a warehouse, and then—once it has been emptied by the warehouse staff—pick it up again and return it to the port. Accomplishing this goal requires dozens of people all communicating together, at times with competing priorities. It means matching containers from customers together into efficient and profitable bundles for drivers to complete. It means negotiating tight constraints on time and space, like when a customer service representative needs to find an appointment time at the terminal for pickup, match it with a container that needs to be returned, joggling the capacity of the terminal, and the delivery requirements of the customer. Then there are the things that go wrong—a container is blocked at the terminal, a container isn’t empty at the customer warehouse, driver gets a flat tire on the way to deliver, the driver is stuck in line to get into the terminal and misses the appointment, or a driver has to cancel due to a family emergency.
        </p>
        <p>
        There are dozens, maybe hundreds, of service failure scenarios that need to be accounted for. That is the reality of any trucking business. On top of all that, we wanted to completely change how truckers found and completed work by using a marketplace app on their smartphone completely upending the status quo. Easy!
        </p>
        <p>
          We needed a comprehensive, powerful, modern software suite for the back office. The toolkit needed to supply the driver app with jobs, to monitor those jobs, and to prevent, or at least resolve, the service failures that happen along the way with those jobs.
        </p>
        <h3>The primary user</h3>
        <p>
          My first task in understanding this problem was to learn from my primary user—Customer Service Representatives. Sometimes called CSRs or simply "Ops", these are the behind-the-scenes folks who are ensuring that NEXT's business runs smoothly.
        </p>
      </section>
      <figure class="image-hasCaption">
        <Img fluid={data.persona.childImageSharp.fluid} />
        <figcaption>
          A model of Customer Service Representative goals, activities, and tasks.
        </figcaption>
      </figure>
    </div>
  </div>
  </div>
  )
}
