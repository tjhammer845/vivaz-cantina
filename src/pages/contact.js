import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

const contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Parallax y={[-60, 20]} tagOuter="figure">
      <StaticImage
        src="../images/slides/about-slides/about-slide-1.jpg"
        alt="About Vivaz Cantina"
        formats={["AUTO", "WEBP", "AVIF"]}
        aspectRatio={256 / 90}
        layout="fullWidth"
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

export default contact
