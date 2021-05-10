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
import "./css/layout.css"
import Scroll from "../components/scroll-to-top"
import { ParallaxProvider } from "react-scroll-parallax"
import styled from "styled-components"
import headerBg from "../images/backgrounds/header-bg.png"
import footerBg from "../images/backgrounds/footer-bg.png"

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
    <SiteContainer>
      <LayoutContainer>
        <TopHeader />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <StyledMain>
          <ParallaxProvider>{children}</ParallaxProvider>
        </StyledMain>
        <Footer />
        <Scroll showBelow={250} />
      </LayoutContainer>
    </SiteContainer>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
const SiteContainer = styled.div`
  background-image: url(${headerBg}), url(${footerBg});
  background-repeat: repeat-x;
  background-position: top left, bottom left; ;
`
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-image: url(${headerBg}), url(${footerBg});
  background-repeat: repeat-x;
  background-position: top left, bottom left;
`
const StyledMain = styled.main`
  flex: 1;
  min-height: auto;
`
