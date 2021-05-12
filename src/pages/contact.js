import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const contact = () => {
  const data = useStaticQuery(graphql`
    query {
      item: file(
        relativePath: { eq: "slides/contact-slides/contact-slide-1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.84)
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
            placeholder="blurred"
            loading="lazy"
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
          <Row>
            <Col md={9}>
              <Form
                name="contact v1"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                action="/thank-you"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="first-name">First Name</Form.Label>
                      <Form.Control
                        required
                        size="lg"
                        type="text"
                        name="first-name"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="last-name">Last Name</Form.Label>
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
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        required
                        size="lg"
                        type="email"
                        name="email"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="phone">Phone (Optional)</Form.Label>
                      <Form.Control size="lg" type="tel" name="phone" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label htmlFor="message">Message</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows="3"
                        placeholder="Enter your message here."
                        name="message"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="d-flex justify-content-lg-end">
                    <Button
                      className="mr-3"
                      type="reset"
                      value="Eraser"
                    >
                      Clear
                    </Button>
                    <Button type="submit">Send</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={3}>Map</Col>
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
