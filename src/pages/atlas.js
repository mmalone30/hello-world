import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Container from "../components/container"
import next from "../../static/next.svg"
import { Link } from "gatsby"
import Icons from "../components/icons"
import FilterVideo from "../../static/startandend.mp4"
import CopyVideo from "../../static/copyPasteCs.mp4"
import EditVideo from "../../static/editShipments.mp4"
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
      },
      atlasConcepts: file(relativePath: { eq: "atlas-concepts.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      oldOrders: file(relativePath: { eq: "Old-OrdersList.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      shipmentsList1: file(relativePath: { eq: "ShipmentsList1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      itemDetail: file(relativePath: { eq: "itemDetail.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      shipmentListIteration: file(relativePath: { eq: "ShipmentsList-iterate.png" }) {
        childImageSharp {
          fluid(maxWidth: 1376, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes1: file(relativePath: { eq: "1_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes2: file(relativePath: { eq: "2_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes3: file(relativePath: { eq: "3_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes4: file(relativePath: { eq: "4_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes5: file(relativePath: { eq: "5_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes6: file(relativePath: { eq: "6_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes7: file(relativePath: { eq: "7_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes8: file(relativePath: { eq: "8_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes9: file(relativePath: { eq: "9_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes10: file(relativePath: { eq: "10_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes11: file(relativePath: { eq: "11_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      SLPrototypes12: file(relativePath: { eq: "12_SLPrototypes.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
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
      <Link to="/"><Icons />Back</Link>
      <h2>ATLAS Freight</h2>
      <h3>Improving the user experience with a more coherent and intentional interaction design.</h3>
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
          The flagship internal product at NEXT Trucking had a deeply flawed information architecture that made it difficult to use for even the most basic tasks. In this project, I'll walk you through how I learned about the problem, what I did about it, and the results so far.
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
      <figure class="image-hasCaption">
        <Img fluid={data.oldOrders.childImageSharp.fluid} />
        <figcaption>
          This was the, at the time, the Orders list. It was responsible for managing all open orders (i.e., shipments) that our Operations team had to fulfill. It was hard to use because it didn't provide any sense of status, location, or relevant actions for the user. The design spit out every piece of data we had on a shipment and left the user alone to figure out what to do.
        </figcaption>
      </figure>
      <section>
        <h3>Design Principles</h3>
        <p>From the research and analysis, my team and I developed design principles that would guide our decision-making. These principles were most useful in design critiques and helped frame the discussion better. If we had good responses to these questions, then we knew we were on the right track.</p>
        <h4>Coherence</h4>
        <ul>
          <li>Do the parts form a unified and understandable whole?</li>
          <li>Do the parts align with user goals in a clear and logical way?</li>
          <li>Are the seams in the experience clear, consistent, and logical?</li>
        </ul>
        <h4>Intentionality</h4>
        <ul>
          <li>Are the relevant parts presented at the right time?</li>
          <li>Do the parts enable a specific action under a given circumstance?</li>
          <li>Are the conditions of the parts clearly presented?</li>
        </ul>
      </section>
      <section>
        <h3>Project Goals</h3>
        <h4>Reduce "pogosticking"</h4>
        <ul>
          <li>Reduce time and effort jumping between Shipments and Loads.</li>
          <li>Reduce engagement on Loads</li>
          <li>Increase engagement on Shipments</li>
        </ul>
        <h4>Reduce time to complete core tasks</h4>
        <ul>
          <li>Making appointments</li>
          <li>"Unblocking" shipments from the terminal and customer yards</li>
          <li>Track and trace of drivers in transit</li>
        </ul>
      </section>
      <section>
        <h3>Success Metrics &amp; Current Values</h3>
        <p>
          With the problem and design principles well understood, we defined what success looks like for this project. Below are the specific tasks we aim to improve along with the baseline time that we recorded (based on 5 users).
        </p>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Success</th>
                <th>Task</th>
                <th>Average Time (in sec)</th>
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
        </div>
      </section>
      <section>
        <h3>Prototypes</h3>
        <p>
          With a firm understanding of the problem space, our principles, and our goals, we started testing low-fidelity click-through prototypes.
          Overall, we evaluated nine distinct designs from usability tests with users and from design critiques with other designers and product executives.
        </p>
        <figure class="grid">
          <Img fluid={data.SLPrototypes1.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes2.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes3.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes4.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes5.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes6.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes7.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes8.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes9.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes10.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes11.childImageSharp.fluid} />
          <Img fluid={data.SLPrototypes12.childImageSharp.fluid} />
        </figure>
      </section>

      <section>
        <h3>Solution</h3>
        <p>
          The big thing we learned is that organizing the "fulfillment" activities (recall the Persona above) in one place&mdash;rather than across different sections as it was&mdash;had huge usability wins. The current design split these activites across different sections of the product, a design we thought would be useful at the time.
        </p>
        <p>
          We also learned that we were just not hitting the mark on the basics: better navigation and organization, bulk action tools, and faster load times for the Shipments list.
        </p>
      </section>
      <figure class="image-hasCaption">
        <Img fluid={data.shipmentsList1.childImageSharp.fluid} />
        <figcaption>
          The final execution of our improved Shipments list in ATLAS Freight. We added a robust navigation system on the left called Groups, Shipments now only display relevant information based on their current status and situation. There is a clear journey to show you where your shipments are and their next appointment. And a whole lot more.
        </figcaption>
      </figure>
      <figure class="image-hasCaption">
        <Img fluid={data.itemDetail.childImageSharp.fluid} />
        <figcaption>
          This diagram identifies the anatomy of the Shipment list item.
        </figcaption>
      </figure>
      <figure class="image-hasCaption">
        <video controls>
          <source src={FilterVideo} type="video/mp4" />
        </video>
        <figcaption>
          A video of the Filtering experience. Looking for matching shipments is a really important when shipments need to be rerouted. Making it easy to apply, remove, and identify applied filters is crucial to the success of the design.
        </figcaption>
      </figure>
      <figure class="image-hasCaption">
        <video controls>
          <source src={CopyVideo} type="video/mp4" />
        </video>
        <figcaption>
          OSs are constantly collaborating with terminals and steamship lists. This means copying and pasting lots of container #s into emails. This was the first bulk action we released and it was met with a very positive reaction.
        </figcaption>
      </figure>
      <figure class="image-hasCaption">
        <video controls>
          <source src={EditVideo} type="video/mp4" />
        </video>
        <figcaption>
          There is lots of data entry and data backfilling in our business. The previous design made data entry a horrible slog. With Bulk Action editing, we turned a rote, laborious task into a breeze. For example, in this video, what took 26 seconds would have taken 5 or more minutes to complete previously.
        </figcaption>
      </figure>
      <figure class="image-hasCaption">
        <Img fluid={data.shipmentListIteration.childImageSharp.fluid} />
        <figcaption>
          Much of the success of this project comes from our iterative approach. With every improvement, we're sensing, responding, and learning. Here is a peek at some of the new improvements coming soon (as of May 2021).
        </figcaption>
      </figure>
      <section>
        <h3>Results</h3>
        <p>The following results are derived from usage data captured between September 2020 to April 2021.</p>
        <div class="panels three">
          <div class="panel success">
            <h4 class="result">49&ndash;61%</h4>
            <p>Reduction in Time to Complete Core Tasks</p>
            <small>Measuring appointments, track and trace, and unblocking shipments.</small>
          </div>
          <div class="panel success">
            <h4 class="result">480%</h4>
            <p>Increase in Engagement</p>
            <small>When measuring average total engagement for the Shipments list. Loads engagement declined 61% and was deprecated on April 1.</small>
          </div>
          <div class="panel success">
            <h4 class="result">264%</h4>
            <p>Increase in Average Engagement per User</p>
            <small>Not only did total engagement increase but we also saw a big jump in engagement on a per user level.</small>
          </div>
        </div>
        <p>These results tell me a few things. We were successful in our primary goals. We redesigned the experience to make it easier to do a whole bunch of stuff. And in doing so, we drove engagement and attention away from similar features (i.e., the Loads page). This reduces annoying "pogosticking" behaviors but it also showed more people that the Shipments list <em>is</em> the place to go to do your work in ATLAS Freight.</p>
        <p>In addition to the increase in engagement, we also saw a <strong>big jump in new users</strong>&mdash;79 to be precise (up 61%).</p>
      </section>
    </div>
  </div>
  </div>
  )
}
