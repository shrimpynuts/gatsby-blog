import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  let header = (
    <div>
      <h6 className="main-heading" style={{ float: "left" }}>
        <Link to="/">Jonathan Cai</Link>
      </h6>
      <h6 className="main-heading" id="about" style={{ float: "right" }}>
        <Link to="/about">About</Link>
      </h6>
    </div>);

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
