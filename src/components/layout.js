/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import TopHeader from "./top-header"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Scroll from "../components/scroll-to-top"
import { ParallaxProvider } from "react-scroll-parallax"
import styled from "styled-components"
import { variables } from "../utils/variables"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <TopHeader />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledMain>
        <ParallaxProvider>{children}</ParallaxProvider>
      </StyledMain>
      <Footer />
      <Scroll showBelow={250} />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout

const StyledMain = styled.main`
  padding-top: 10rem;
  padding-bottom: 7rem;
  background: ${variables.paleYellow};
`
