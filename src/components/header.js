import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Header = ({ siteTitle }) => (
    <header
        style={{
            background: `black`,
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                <h1 style={{ margin: 0 }}>
                    {siteTitle}
                </h1>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/aboutUs/">About Us</ListLink>
                <ListLink to="/menu/">Our Menu</ListLink>
                <ListLink to="/contact/">Contact Us</ListLink>
            </ul>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
