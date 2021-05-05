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
import Logo from "../images/logo/logo.png"

const useStyles = makeStyles(theme => ({
  appBarTransparent: {
    backgroundColor: variables.transOrange,
  },
  appBarSolid: {
    backgroundColor: variables.bloodOrange,
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
      <Container
        fluid="lg"
        style={{
          padding: `2.5rem 0`,
        }}
      >
        <Row>
          <Col lg={6} md={12}>
            <Link
              to="/"
              title={siteTitle}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <h1 style={{ margin: 0 }}>
                <img
                  src={Logo}
                  alt={siteTitle}
                  className="mt-n5 mb-n5 img-fluid"
                />
              </h1>
            </Link>
          </Col>
          <Col lg={6} md={12}>
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
    position: fixed;
    height: 8rem;
    width: 100%;
    top: 36px;
    z-index: 20;
    padding: 0.5rem;
    transition: background 300ms;
}
`
