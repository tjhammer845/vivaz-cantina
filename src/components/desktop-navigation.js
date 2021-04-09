import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"
import NavLinks from "./nav-links"

const DesktopNavigation = () => {
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 20
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <MenuLinks>
      <NavLinks />
    </MenuLinks>
  )
}
export default DesktopNavigation

const MenuLinks = styled.nav`
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
    justify-content: flex-end;
  }
  ul {
    width: 100%;
    margin: 0;
    text-align: right;

    li {
      text-align: right;
      list-style: none;
      margin: 0;
      display: inline-block;
      width: 25%;

      a {
        display: inline-block;
        font-weight: bold;
        text-decoration: none;
        color: white;
        :hover {
          transition: 0.3s ease-in-out;
          color: ${variables.purple};
        }
        &.active {
          color: ${variables.purple};
        }
      }
    }
    hr {
      display: none;
      background: url("http://i.stack.imgur.com/37Aip.png") no-repeat top center;
      background-size: contain;
      float: right;
      width: 1rem;
      margin: 0.5rem 0 0 0;
      height: 1rem;
      // background: ${variables.purple}};
      border: none;
    }
    li:hover ~ hr {
      transition: 0.3s ease-in-out;
      display: inline-block;
    }
    li.home:hover ~ hr {
      margin-right: 75%;
    }
    li.menu:hover ~ hr {
      margin-right: 50%;
    }
    li.about:hover ~ hr {
      margin-right: 25%;
    }
    li.contact a:hover ~ hr {
      margin-right: 0%;
    }
  }
`
