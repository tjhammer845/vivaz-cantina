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

const ThankYou = () => {
  const data = useStaticQuery(graphql`
    query {
      item: file(
        relativePath: { eq: "slides/about-slides/about-slide-1.jpg" }
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
      <SEO title="Gracias - Message sent successfully!" />
      <ThankyouContainer>
        <Parallax y={[-50, 50]} tagOuter="figure">
          <GatsbyImage
            image={image}
            alt="Thank you from Vivaz Cantina"
            aspectRatio={256 / 90}
            placeholder="blurred"
            loading="lazy"
          />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12} className="pt-5 pb-4">
              <h2>Thanks for reaching out!</h2>
              <p>
                Your message was sent successfully. We will do our best to
                respond in a timely manner, usually within 1-2 days.
              </p>
            </Col>
          </Row>
        </Container>
      </ThankyouContainer>
      {/* <InstagramFeed /> */}
    </Layout>
  )
}
export default ThankYou
const ThankyouContainer = styled.div`
  padding-top: 7rem;
  @media ${breakpoints.sm} {
    padding-top: 6rem;
  }
  @media ${breakpoints.md} {
    padding-top: 0;
  }
`
