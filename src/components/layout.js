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
      <main className="mt-header" style={{ marginBottom: `81px` }}>
        <ParallaxProvider>{children}</ParallaxProvider>
      </main>
      <Footer />
      <Scroll showBelow={250} />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
