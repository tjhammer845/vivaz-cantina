import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"
import NavLinks from "./nav-links"
import maracha from "../images/maracha.png"

const DesktopNavigation = () => {
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
    hr {
      display: none;
      background: url(${maracha}) no-repeat top center;
      background-size: contain;
      float: right;
      width: 60px;
      height: 70px;
      margin-top: -2rem;
      border: none;
    }
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
          color: ${variables.yellow};
        }
        &.active {
          color: ${variables.yellow};
          hr {
            display: inline-block;
            float: left;
            margin-top: -0.5rem;
            margin-left: -2rem;
            position: absolute;
            @media ${breakpoints.xl} {
              margin-left: -2.3rem;
            }
          }
        }
      }
    }
    li:hover ~ hr {
      transition: 0.3s ease-in-out;
      display: inline-block;
    }
    li.home:hover ~ hr {
      margin-right: 81%;
    }
    li.menu:hover ~ hr {
      margin-right: 55.4%;
    }
    li.about:hover ~ hr {
      margin-right: 31.3%;
    }
    li.contact:hover ~ hr {
      margin-right: 10%;
    }
  }
`
