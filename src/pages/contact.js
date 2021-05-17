import * as React from "react"
import ContactInfo from "../components/contact-info"
import Layout from "../components/layout"
import Map from "../components/mapbox"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container, Button, Col, Form, Row } from "react-bootstrap"
import { Parallax } from "react-scroll-parallax"
import { breakpoints } from "../utils/breakpoints"

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
              <Form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-recaptcha="true"
                action="/thank-you"
                netlify-honeypot="bot-field"
              >
                <Row>
                  <Col md={6}>
                    <Form.Group>
                      <label>
                        Don’t fill this out if you&rsquo;re human:{" "}
                        <input name="bot-field" />
                      </label>
                    </Form.Group>
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
                    <Button className="mr-3" type="reset" value="Eraser">
                      Clear
                    </Button>
                    <Button type="submit">Send</Button>
                  </Col>
                </Row>
              </Form>
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
