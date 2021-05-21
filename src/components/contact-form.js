import React from "react"
import styled from "styled-components"
import ReCAPTCHA from "react-google-recaptcha"
import { Button, Col, Form, Row } from "react-bootstrap"
import { breakpoints } from "../utils/breakpoints"

export default function ContactForm() {
  return (
    <Form
      name="contact"
      method="POST"
      netlify
      netlify-recaptcha
      action="/thank-you"
      netlify-honeypot="bot-field"
    >
      <Row>
        <Col md={12}>
          <h3>Message Us</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group hidden>
            <Form.Label htmlFor="bot-field">
              Bot Field: Humans do not fill out!
            </Form.Label>
            <Form.Control name="bot-field" />
            <Form.Control name="form-name" value="contact" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="first-name">First Name</Form.Label>
            <Form.Control required size="lg" type="text" name="first-name" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="last-name">Last Name</Form.Label>
            <Form.Control required size="lg" type="text" name="last-name" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control required size="lg" type="email" name="email" />
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
        <Col md={12}>
          <FormControls>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_KEY}
              className="mb-3"
            />
            <div>
              <Button className="mr-3" type="reset" value="Eraser">
                Clear
              </Button>
              <Button type="submit">Send</Button>
            </div>
          </FormControls>
        </Col>
      </Row>
    </Form>
  )
}
const FormControls = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${breakpoints.sm} {
    flex-direction: row;
    justify-content: space-between;
  }
`
