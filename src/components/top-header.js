import * as React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-solid-svg-icons"
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
              <a
                href="tel:475-238-6390"
                className="phone-btn"
                title="Call VivaZ Cantina"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
            <span className="address ml-3">
              <FontAwesomeIcon icon={faMapPin} />&nbsp; 161 Park St, New Haven, CT 06511
            </span>
            <span className="hours ml-3">
              <FontAwesomeIcon icon={faClock} />&nbsp; 4pm-1am
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
    a.phone-btn {
        border-radius: 50%;
        width: 28px;
        height: 28px;
        display: inline-block;
        background: ${variables.green};
        text-align: center;
        svg {
            width: .9rem;
            color: white;
        }
        &:hover {
            background: ${variables.orange};
        }
        @media ${breakpoints.lg} {
            a {
                height: 30px;
                width: 30px;
            }
        }
    }
    span {
      font-size: 0.65rem;
      font-weight: 600;
      @media ${breakpoints.sm} {
        font-size: 0.7rem;
      }
    }
    .address {
      display: none;
      @media ${breakpoints.sm} {
        display: inline;
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
            margin-top: 0.05rem;
        }
        a:first-child {
            .social-container {
                .social-svg {
                    g.social-svg-mask {
                      fill:  ${variables.darkBlue}!important;
                    }
                }
            }
        }
        a:last-child {
            .social-container {
                .social-svg {
                    g.social-svg-mask {
                      fill:  ${variables.lightPurple}!important;
                    }
                }
            }
        }
        a:hover {
            .social-container {
                .social-svg {
                    g.social-svg-mask {
                      fill:  ${variables.orange}!important;
                    }
                }
            }
        }
        @media ${breakpoints.xs} {
            position: relative;
            display: flex;
            align-items: center;
            float: right;
            top: initial;
            right: initial;
            a {
                height: 30px!important;
                width: 30px!important;
                margin-top: 0;
            }
        }
    }
}
`
