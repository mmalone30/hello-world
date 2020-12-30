import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../components/container"
import next from "../../static/next.svg"
export default () => {
  const data = useStaticQuery(graphql`
    query {
      atlashomepage: file(relativePath: { eq: "atlas-homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      persona: file(relativePath: { eq: "OS-persona.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      coreLoop: file(relativePath: { eq: "OS-CoreLoop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      research: file(relativePath: { eq: "research.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
 `)
 return (
  <div>
  <header>
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
          Businesses pay NEXT to bring their shipments from ports in LA and Long Beach to their warehouses in the United States.
          NEXT manages the fulfillment of shipments with a proprietary software platform called ATLAS. Its flagship product is called Freight
          and, by May of 2020, it was very hard to use. It had grown in size and scope; it was riddled with lots of features that were hard to
          understand and differentiate.
        </p>

        <p>
          This complexity in the product increased training costs, usability errors, interaction costs, and generally was not fun to use. These
          outcomes were also directly affecting our top-level corporate goal—increase gross margins. We had the backing of our executive team to
          figure out how we could improve both our user’s lives and our corporate objectives.
        </p>
        <h3>Our primary user</h3>
        <p>
          The Operational Specialist (OS) is the main user of ATLAS Freight and is the type of person most likely to run into the issues we're addressing. The OS is like a customer service rep combined with a freight dispatcher. She is connecting all the dots required to move a shipment from point A to point B.
        </p>
      </section>
      <figure class="image-hasCaption">
        <Img fluid={data.persona.childImageSharp.fluid} />
        <figcaption>
          A model of the Operational Specialist (OS) goals, activities, and tasks.
        </figcaption>
      </figure>

      <section>
        <h3>What is causing the problems?</h3>
        <p>
        After observing and interviewing dozens of users working with Freight, we identified three main causes for the problems we identified.
        </p>
        <ol>
          <li>
            <strong>Behaviors are driven by shipment status and condition but we didn’t make it easy for OSs to understand what these are.</strong> For example,
            when a shipment is blocked by customs at the terminal, a fee is usually required to be paid to release it. This only happens when the
            shipment is in this state and once it leaves the terminal, it is never an issue again. But seeing this condition at a glance was difficult.
          </li>
          <li>
            <strong>The tasks that need to be completed require lots of navigation, searching, and clicking around to complete them which eats up a lot of time and effort.</strong> For example, to make an appointment for a shipment to leave the terminal—a key task that must happen—users needed to find the shipment, navigate to the shipment detail page, find the correct load, click a dropdown menu, click a button to bring up a modal to change the appointment, enter the appointment and save. This is a very costly interaction, especially one that usually happens in bulk.
          </li>
          <li>
            <strong>The product architecture is organized incoherently. User goals and tasks are scattered throughout the product with no clear reasoning.</strong> For example, to manage the successful fulfillment of shipments—a key user goal—users had to jump between two different sections of the
            product constantly.
          </li>
        </ol>
      </section>
      <figure class="image-hasCaption">
        <Img fluid={data.research.childImageSharp.fluid} />
        <figcaption>
          Some photos of me in the field conducting research. My approach to research is pretty simple—expose myself to users and really listen and watch what they are doing.
        </figcaption>
      </figure>
      <section>
        <h3>Design Principles</h3>
        <p>From the research and analysis, my team and I developed design principles that would guide our decision-making. These principles were most useful in design critiques and helped frame the discussion better. If we had good responses to these questions, then we knew we were on the right track.</p>
        <div class="panels two">
          <div class="panel">
            <h4>Coherence</h4>
            <ul>
              <li>Do the parts form a unified and understandable whole?</li>
              <li>Do the parts align with user goals in a clear and logical way?</li>
              <li>Are the seams in the experience clear, consistent, and logical?</li>
            </ul>
          </div>
          <div class="panel">
            <h4>Intentionality</h4>
            <ul>
              <li>Are the relevant parts presented at the right time?</li>
              <li>Do the parts enable a specific action under a given circumstance?</li>
              <li>Are the conditions of the parts clearly presented?</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h3>Success Metrics &amp; Current Values</h3>
        <p>
          With the problem and design principles well understood, we defined what success looks like for this project.
        </p>
        <table>
          <thead>
            <tr>
              <td>Success</td>
              <td>Task</td>
              <td>Average Time (in sec)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reduce track and trace time per shipment per user</td>
              <td>For any 5 shipments in the Shipments list, tell me the current location, next location (if any), and its job status</td>
              <td>194</td>
            </tr>
            <tr>
              <td>Reduce time to make appointment per shipment per user</td>
              <td>Find 2 shipments that are available to outgate and enter this outgate appointment: 00:00 00/00/00</td>
              <td>92</td>
            </tr>
            <tr>
              <td>Reduce mark empty time</td>
              <td>Find 2 shipments to mark empty</td>
              <td>51</td>
            </tr>
            <tr>
              <td>Reduce mark availability time</td>
              <td>Find 2 shipments to mark available</td>
              <td>61</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
  </div>
  )
}
