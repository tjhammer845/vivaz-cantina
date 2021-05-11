import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import { variables } from "../utils/variables"
import { breakpoints } from "../utils/breakpoints"

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
      <ContactContainer>
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
            </Col>
          </Row>
        </Container>
        <Container>
          <Form
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            action="/thank-you/"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="vivaz-form" value="contact" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="text"
                    name="first-name"
                  />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    size="lg"
                    type="text"
                    name="last-name"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control required size="lg" type="email" name="email" />
                </Form.Group>
              </Col>
              <Col sm={12} md={6}>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone (Optional)</Form.Label>
                  <Form.Control size="lg" type="tel" name="phone" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="3"
                    placeholder="Enter your message here."
                    name="info"
                  />
                </Form.Group>
                <Button type="sumbit">Send</Button>
              </Col>
            </Row>
          </Form>
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
