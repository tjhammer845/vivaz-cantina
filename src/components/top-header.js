import * as React from "react"
import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
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
      <Container
        fluid="lg"
        style={{
          padding: `0`,
        }}
      >
        <Row>
          <Col lg={6} md={12}>
            <span>1-888-555-4444</span>
          </Col>
          <Col lg={6} md={12} className="d-flex justify-content-end">
            <i>Instagram</i>
            <i>Facebook</i>
            <i>Twitter</i>
          </Col>
        </Row>
      </Container>
    </StyledTopHeader>
  )
}
const StyledTopHeader = styled.header`
    display: flex;
    position: fixed;
    height: 2rem;
    width: 100%;
    top: 0;
    z-index: 20;
    padding: 0.5rem;
    transition: background 300ms;
}
`
