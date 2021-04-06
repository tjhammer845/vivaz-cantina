import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container'


const FooterLink = props => (
    <li style={{ display: `inline-block`, marginBottom: `0`, marginLeft: `1rem` }}>
        <Link to={props.to} title={props.title} style={{ color: `white`, }}>{props.children}</Link>
    </li>
)
const Footer = () => (
    <footer
        style={{
            marginTop: `4rem`,
            background: `#221a41`,
        }}
    >
        <Container
            style={{
                padding: `1.45rem 1.0875rem`,
            }}
        >
            <div style={{ listStyle: `none` }}>
                <ul style={{ margin: `0` }}>
                    <FooterLink to="/menu/" title="Our Menu">Our Menu</FooterLink>
                    <FooterLink to="/aboutUs/" title="About Us">About Us</FooterLink>
                    <FooterLink to="/contactUs/" title="Contact Us">Contact Us</FooterLink>
                </ul>
            </div>
            <div style={{ float: `right`, color: `white` }}><p>
                &copy; {new Date().getFullYear()}, Built by
          {` `}
                <a style={{ color: `white` }}
                    href="https://tom.thecaffeineteam.com">The Caffeine Team</a>
            </p></div>
        </Container>
    </footer>
)
export default Footer
