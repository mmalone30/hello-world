import React from "react"
import picture from "../../static/pic.png"
import picStyles from "./pic.module.css"
export default ({ children }) => (

  <img className={picStyles.pic} src={picture} />

)
