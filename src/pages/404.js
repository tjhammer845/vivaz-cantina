import * as React from "react"
// import InstagramFeed from "../components/instagram-feed"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import { breakpoints } from "../utils/breakpoints"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      item: file(
        relativePath: { eq: "slides/template-slides/template-slide-1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)
  const image = getImage(data.item)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <PageNotFoundContainer>
        <Parallax y={[-50, 50]} tagOuter="figure">
          <GatsbyImage
            image={image}
            alt="Page not found on Vivaz Cantina"
            aspectRatio={256 / 90}
            placeholder="blurred"
            loading="lazy"
          />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="pt-5">Page Not Found (404)</h2>
              <p>
                <p>
                  {" "}
                  Oops! We can&#39;t seem to find this page or it doesn&#39;t
                  exist... the sadness.
                </p>
              </p>
            </Col>
          </Row>
        </Container>
      </PageNotFoundContainer>
      {/* <InstagramFeed /> */}
    </Layout>
  )
}
export default NotFoundPage
const PageNotFoundContainer = styled.div`
  padding-top: 7rem;
  @media ${breakpoints.sm} {
    padding-top: 6rem;
  }
  @media ${breakpoints.md} {
    padding-top: 0;
  }
`
