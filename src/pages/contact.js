import * as React from "react"
import ContactForm from "../components/contact-form"
import ContactInfo from "../components/contact-info"
import Layout from "../components/layout"
import Map from "../components/mapbox"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container, Col, Row } from "react-bootstrap"
import { Parallax } from "react-scroll-parallax"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactContainer>
        <Parallax>
          <Map />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="pt-5 pb-3">Contact VivaZ Cantina</h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="flex-column-reverse flex-lg-row">
            <Col md={12} lg={8}>
              <ContactForm />
            </Col>
            <Col md={12} lg={4}>
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
  padding-bottom: 3rem;
`
