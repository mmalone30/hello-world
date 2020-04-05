import React from "react"
import { Link } from "gatsby"
import next from "../../static/next.svg"
import sharethrough from "../../static/sharethrough.svg"
import kareo from "../../static/kareo.svg"
import weedmaps from "../../static/weedmaps.svg"
import poplibs from "../../static/poplibs.svg"
import workStyles from "./work.module.css"


const WorkItem = props => (
  <a href="#" className={workStyles.WorkItemWrapper}>
    <div class={workStyles.WorkItemLogo}>
      <img src={props.logo} />
    </div>
    <div class={workStyles.WorkItemLabel}>View Project</div>
    <div class={workStyles.WorkItemImage}></div>
    <div class={workStyles.WorkItemDescription}>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
      <small>{props.date}</small>
    </div>
  </a>
)

export default () => (
  <div className={workStyles.work}>

      <WorkItem
        title="ATLAS"
        subtitle="Internal software platform for NEXT operations"
        date="2019"
        logo={next}
      />

      <WorkItem
        title="Weedmaps Social Experience"
        subtitle="Growing the ad business with fun social interactions"
        date="2018"
        logo={weedmaps}
      />

      <WorkItem
        title="Sharethrough Platform Alerts"
        subtitle="Making it easier for publishers to improve their inventory by surfacing problems and opportunities"
        date="2017"
        logo={sharethrough}
      />

      <WorkItem
        title="Sharethrough Reporting Design"
        subtitle="Designing a new way to understand digital advertising performance"
        date="2017"
        logo={sharethrough}
      />

      <WorkItem
        title="Poplibs"
        subtitle="A simple Madlibs-style game for the internet"
        date="2017"
        logo={poplibs}
      />

      <WorkItem
        title="Kareo Patient Portal"
        subtitle="Easily understand and pay your medical bills, message your doctor, and see your medical records"
        date="2014"
        logo={kareo}
      />

  </div>

)
