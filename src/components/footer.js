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
  <StyledFooter>
    <Container fluid="lg">
      <Row className="pt-4 pb-4">
        <Col
          sm={12}
          md={6}
          lg={5}
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
          lg={7}
          className="d-flex justify-content-center justify-content-md-end"
        >
          <StyledP className="m-0">
            &copy; {new Date().getFullYear()} VivaZ Cantina. All rights reserved.
          </StyledP>
        </Col>
      </Row>
    </Container>
  </StyledFooter>
)
export default Footer
const StyledFooter = styled.footer`
  background: ${variables.purple};
`
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
          font-weight: bold;
          :hover {
            color: ${variables.yellow};
          }
        }
      }
    }
  }
`
const StyledP = styled.nav`
  font-size: 0.85rem;
  color: white;
  a:hover {
    text-decoration: underline;
  }
`
