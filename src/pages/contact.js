import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

const contact = () => {
  const data = useStaticQuery(graphql`
    query {
      item: file(
        relativePath: { eq: "slides/contact-slides/contact-slide-1.jpg" }
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
      <SEO title="Contact" />
      <Parallax y={[-50, 50]} tagOuter="figure">
        <GatsbyImage
          image={image}
          alt="About Vivaz Cantina"
          aspectRatio={256 / 90}
          placeholder="blurred"
          loading="eager"
        />
      </Parallax>
      <Container>
        <Row>
          <Col sm={12}>
            <h2>Contact Vivaz Cantina</h2>
            <p>Form will go here.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default contact
