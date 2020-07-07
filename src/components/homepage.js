import React from "react"
import { Link } from "gatsby"
import homepageStyles from "./homepage.module.css"
export default ({ children }) => (
  <div className={homepageStyles.homepage}>
    {children}
  </div>
)
