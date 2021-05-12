import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha"
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
            <Col md={8}>
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
                  <Col lg={6} className="mb-3">
                    <ReCAPTCHA
                      className="w-100 d-flex justify-content-end"
                      sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                    />
                  </Col>
                  <Col lg={6}>
                    <Button
                      className="mr-3 d-none d-lg-inline-block"
                      type="reset"
                      value="Eraser"
                    >
                      Clear Form
                    </Button>
                    <Button type="submit">Send Message</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col md={4}>Map</Col>
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
