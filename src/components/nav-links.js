import React from "react"
import { Link } from "gatsby"

const HeaderLink = props => (
  <li className={props.className}>
    <Link to={props.to} title={props.title} activeClassName="active">
      {props.children}
    </Link>
  </li>
)
const NavLinks = () => {
  return (
    <ul>
      <HeaderLink to="/" className="home" title="Home">
        Home
      </HeaderLink>
      <HeaderLink to="/menu/" className="menu" title="Menu">
        Menu
      </HeaderLink>
      <HeaderLink to="/about/" className="about" title="About">
        About
      </HeaderLink>
      <HeaderLink to="/contact/" className="contact" title="Contact">
        Contact
      </HeaderLink>
      <hr />
    </ul>
  )
}
export default NavLinks
