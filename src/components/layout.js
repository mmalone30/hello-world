import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.css"
export default ({ children }) => (
  <div className={layoutStyles.layout}>
    {children}
  </div>
)
