import * as React from "react"
import ContactForm from "../components/contact-form"
import ContactInfo from "../components/contact-info"
import Layout from "../components/layout"
import Map from "../components/mapbox"
import SEO from "../components/seo"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { Container, Col, Row } from "react-bootstrap"
import { Parallax } from "react-scroll-parallax"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactContainer>
        <Parallax y={[-50, 50]} tagOuter="figure">
          <Map />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12}>
              <h2>Contact Vivaz Cantina</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={12} sm={7} md={8}>
              <ContactForm />
            </Col>
            <Col xs={12} sm={5} md={4}>
              <ContactInfo />
            </Col>
          </Row>
        </Container>
      </ContactContainer>
    </Layout>
  )
}
export default contact
const ContactContainer = styled.div`
  padding-top: 7rem;
  @media ${breakpoints.sm} {
    padding-top: 6rem;
  }
  @media ${breakpoints.md} {
    padding-top: 0;
  }
`
