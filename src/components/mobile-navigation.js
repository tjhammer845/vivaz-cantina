import React, { useState } from "react"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"
import NavLinks from "./nav-links"

const MobileNavigation = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <NavLinks />
      </MenuLinks>
    </MenuBar>
  )
}
export default MobileNavigation

const MenuBar = styled.div`
  @media ${breakpoints.lg} {
    display: none;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 2.5rem;
  right: 7px;
  padding: 0.25rem 0;
  border-radius: 5px;
  background: ${variables.darkOrange};
  @media ${breakpoints.lg} {
    right: 0;
  }
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 22;
  right: 0;

  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
        menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: ${variables.transPurple};
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateY(0)" : "translateY(100%)"};

  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
        padding: 1rem;
        display: block;
        :hover,
        :active {
          color: ${variables.yellow};
        }
      }
    }
  }
`
