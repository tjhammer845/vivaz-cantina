import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MobileNavigation from "./mobile-navigation"
import DesktopNavigation from "./desktop-navigation"
import styled from "styled-components"
import { variables } from "../utils/variables"
import { breakpoints } from "../utils/breakpoints"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container
      fluid="lg"
      style={{
        padding: `1.45rem 0`,
      }}
    >
      <Row>
        <Col md={7} sm={12}>
          <Link
            to="/"
            title="Home"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h1 style={{ margin: 0 }}>{siteTitle}</h1>
          </Link>
        </Col>
        <Col md={5} sm={12}>
          <DesktopNavigation />
          <MobileNavigation />
        </Col>
      </Row>
    </Container>
  </StyledHeader>
)
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}
export default Header

const StyledHeader = styled.header`
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 20;
    padding: 0.5rem;
    transition: background 300ms;
    background: ${({ background }) =>
      background ? variables.bloodOrange : variables.orange};

  @media ${breakpoints.md} {
    background: ${({ background }) =>
      background ? variables.bloodOrange : variables.transOrange};
    }
}
`
