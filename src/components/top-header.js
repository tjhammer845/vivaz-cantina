import * as React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { makeStyles } from "@material-ui/core/styles"
import { useEffect, useState } from "react"
import { SocialIcon } from "react-social-icons"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"

const useStyles = makeStyles(theme => ({
  appBarTransparent: {
    backgroundColor: variables.transYellow,
  },
  appBarSolid: {
    backgroundColor: variables.yellow,
  },
}))

export default function TopHeader() {
  const classes = useStyles()
  const url = typeof window !== "undefined" ? window.location.href : ""

  const [navBackground, setNavBackground] = useState("appBarSolid")
  const navRef = React.useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 144
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
    <StyledTopHeader className={classes[navRef.current]}>
      <Container fluid="lg">
        <Row>
          <Col sm={12} className="pl-lg-0 pr-lg-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
              <small>1-203-444-0664</small>
            </span>
            <span className="ml-3 d-none d-sm-inline">
              <FontAwesomeIcon icon={faMapPin} />
              <small>161 Park St, New Haven, CT 06511</small>
            </span>
            <span className="social-share">
              <SocialIcon
                url="https://www.facebook.com/vivaznewhaven/"
                target="_blank"
              />
              <SocialIcon
                url="https://instagram.com/vivaznewhaven"
                target="_blank"
                className="ml-1"
              />
            </span>
          </Col>
        </Row>
      </Container>
    </StyledTopHeader>
  )
}
const StyledTopHeader = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    height: 2rem;
    width: 100%;
    top: 0;
    z-index: 20;
    transition: background 300ms;
    span {
        small {
            padding-left: 0.5rem;
            font-size: 75%;
            font-weight: 600;
        }
    }
    .social-share {
        position: fixed;
        top: 0.075rem;
        right: 0.5rem;
        float: initial;
        a {
            height: 28px!important;
            width: 28px!important;
        }
        @media ${breakpoints.lg} {
            position: relative;
            display: flex;
            align-items: center;
            float: right;
            top: initial;
            right: initial;
            a {
                height: 30px!important;
                width: 30px!important;
            }
        }
    }
}
`
