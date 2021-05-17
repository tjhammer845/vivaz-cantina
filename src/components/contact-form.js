import React from "react"
// import Recaptcha from "react-google-recaptcha"
import { Honeypot } from "react-netlify-forms"
import { Button, Col, Form, Row } from "react-bootstrap"

export default function ContactForm() {
  return (
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
          <p hidden>
            <input name="bot-field" />
          </p>
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
        <Col md={12} className="d-flex justify-content-lg-end">
          {/* <Recaptcha
            ref="recaptcha"
            sitekey={process.env.GATSBY_RECAPTCHA_KEY}
            size="normal"
            id="recaptcha-google"
          /> */}
          <Button className="mr-3" type="reset" value="Eraser">
            Clear
          </Button>
          <Button type="submit">Send</Button>
        </Col>
      </Row>
    </Form>
  )
}
