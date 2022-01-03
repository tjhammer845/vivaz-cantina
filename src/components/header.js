import * as React from "react"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import MobileNavigation from "./mobile-navigation"
import DesktopNavigation from "./desktop-navigation"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
import { variables } from "../utils/variables"
import Logo from "../images/logo/logo.inline.svg"

const useStyles = makeStyles(theme => ({
  appBarTransparent: {
    backgroundColor: variables.transOrange,
  },
  appBarSolid: {
    backgroundColor: variables.orange,
  },
}))

export default function Header({ siteTitle }) {
  const classes = useStyles()

  const [navBackground, setNavBackground] = useState("appBarSolid")
  const navRef = React.useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 180
      if (show) {
        setNavBackground("appBarTransparent")
      } else {
        setNavBackground("appBarSolid")
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <StyledHeader className={classes[navRef.current]}>
      <Container fluid="lg">
        <Row>
          <Col lg={6} md={12} className="pl-4 pr-4 pl-lg-0">
            <Link
              to="/"
              title={siteTitle}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h1 style={{ margin: 0 }}>
                <Logo alt={siteTitle} className="mt-n4 mb-n4 img-fluid" />
              </h1>
            </Link>
          </Col>
          <Col lg={6} md={12} className="pr-lg-0">
            <DesktopNavigation />
            <MobileNavigation />
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    height: 8rem;
    width: 100%;
    top: 2rem;
    z-index: 20;
    padding: 0.5rem;
    transition: background 300ms;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.7);
    svg {
        height: fit-content;
        max-height: 8rem;
        padding: .75rem 0;
        transition: all 1s ease;
     }
     svg:hover {
        filter: brightness(150%);
     }
}
`
