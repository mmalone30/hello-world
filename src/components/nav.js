import React from "react"
import { Link } from "gatsby"
import navStyles from "./nav.module.css"
export default ({ children }) => (
  <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link to="/" activeClassName={navStyles.active}>Home</Link>
      </li>
      <li>
        <Link to="/about/" activeClassName={navStyles.active}>About</Link>
      </li>
      <li>
        <Link to="/contact/" activeClassName={navStyles.active}>Contact</Link>
      </li>
    </ul>
  </nav>
)
