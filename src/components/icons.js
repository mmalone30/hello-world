import React from "react"
import back from "../../static/back.svg"
import iconsStyles from "./icons.module.css"


const Icon = props => (
  <img src={props.name} />
)

export default () => (
  <Icon name={back} />

)
