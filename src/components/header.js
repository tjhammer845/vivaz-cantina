import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'


const HeaderLink = props => (
    <li style={{ display: `inline-block`, marginBottom: `0`, marginLeft: `1rem` }}>
        <Link to={props.to} title={props.title} style={{ color: `white`, }}>{props.children}</Link>
    </li>
)
const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `#a51e25`,
        }}
    >
        <Container
            style={{
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <Link
                to="/"
                title="Home"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                <h1 style={{ margin: 0 }}>
                    {siteTitle}
                </h1>
            </Link>
            <ul style={{ listStyle: `none`, float: `right`, margin: `0` }}>
                <HeaderLink to="/menu/" title="Our Menu">Our Menu</HeaderLink>
                <HeaderLink to="/aboutUs/" title="About Us">About Us</HeaderLink>
                <HeaderLink to="/contactUs/" title="Contact Us">Contact Us</HeaderLink>
            </ul>
        </Container>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
