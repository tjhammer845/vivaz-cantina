import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { variables } from "../utils/variables"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const FooterLink = props => (
  <li>
    <Link to={props.to} title={props.title}>
      {props.children}
    </Link>
  </li>
)
const Footer = () => (
  <footer
    style={{
      marginTop: `4rem`,
      background: `${variables.purple}`,
    }}
  >
    <Container fluid="lg">
      <Row className="pt-5 pb-5">
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center justify-content-md-start mb-4 mb-md-0"
        >
          <MenuLinks>
            <ul>
              <FooterLink to="/" title="Home">
                Home
              </FooterLink>
              <FooterLink to="/menu/" title="Menu">
                Menu
              </FooterLink>
              <FooterLink to="/about/" title="About">
                About
              </FooterLink>
              <FooterLink to="/contact/" title="Contact">
                Contact
              </FooterLink>
            </ul>
          </MenuLinks>
        </Col>
        <Col
          sm={12}
          md={6}
          className="d-flex justify-content-center justify-content-md-end"
        >
          <p className="text-white m-0">
            &copy; {new Date().getFullYear()}, Built by
            {` `}
            <a className="text-white" href="https://tom.thecaffeineteam.com">
              The Caffeine Team
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
)
export default Footer

const MenuLinks = styled.nav`
    display: flex;
    width: 100%;
    ul {
      display: flex;
      align-items: center; 
      width: 100%;
      justify-content: space-around;
      margin: 0;
      @media ${breakpoints.md} {
        justify-content: space-between;
    }
      li {
        list-style: none;
        margin: 0;

        a {
          text-decoration: none;
          color: white;
          transition: color 300ms;

          :hover {
            color: #8d1a2b;
          }
        }
      }
    }
  }
`
