import React from "react"
// import Recaptcha from "react-google-recaptcha"
// import { Button, Col, Form, Row } from "react-bootstrap"

export default function ContactForm() {
  return (
    <form
      name="simpleContactForm"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="simple-contact-form"
      class="contact-form"
    >
      <p class="hidden">
        <label id="contact-form-bot-label">
          Don't fill this out if you're human:
          <input name="bot-field" aria-labelledby="contact-form-bot-label" />
        </label>
      </p>
      <p class="form-row">
        <label
          id="contact-form-name-label"
          for="contact-form-name"
          class="form-label"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="contact-form-name"
          aria-labelledby="contact-form-name-label"
          class="form-input"
        />
      </p>
      <p class="form-row">
        <label
          id="contact-form-email-label"
          for="contact-form-email"
          class="form-label"
        >
          Email address
        </label>
        <input
          type="email"
          name="email"
          id="contact-form-email"
          aria-labelledby="contact-form-email-label"
          class="form-input"
        />
      </p>
      <p class="form-row">
        <label
          id="contact-form-message-label"
          for="contact-form-message"
          class="form-label"
        >
          Message
        </label>
        <textarea
          name="message"
          id="contact-form-message"
          aria-labelledby="contact-form-message-label"
          class="form-textarea"
          rows="7"
        ></textarea>
      </p>
      <p class="form-row form-submit">
        <button type="submit" class="button">
          Send Message
        </button>
      </p>
    </form>
    // <Form
    //   name="contact"
    //   method="post"
    //   data-netlify="true"
    // //   data-netlify-recaptcha="true"
    //   action="/thank-you"
    //   netlify-honeypot="bot-field"
    // >
    //   <Row>
    //     <Col md={6}>
    //       <p hidden>
    //         <input name="bot-field" />
    //       </p>
    //       <Form.Group>
    //         <Form.Label htmlFor="first-name">First Name</Form.Label>
    //         <Form.Control required size="lg" type="text" name="first-name" />
    //       </Form.Group>
    //     </Col>
    //     <Col md={6}>
    //       <Form.Group>
    //         <Form.Label htmlFor="last-name">Last Name</Form.Label>
    //         <Form.Control required size="lg" type="text" name="last-name" />
    //       </Form.Group>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md={6}>
    //       <Form.Group>
    //         <Form.Label htmlFor="email">Email</Form.Label>
    //         <Form.Control required size="lg" type="email" name="email" />
    //       </Form.Group>
    //     </Col>
    //     <Col md={6}>
    //       <Form.Group>
    //         <Form.Label htmlFor="phone">Phone (Optional)</Form.Label>
    //         <Form.Control size="lg" type="tel" name="phone" />
    //       </Form.Group>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md={12}>
    //       <Form.Group>
    //         <Form.Label htmlFor="message">Message</Form.Label>
    //         <Form.Control
    //           required
    //           as="textarea"
    //           rows="3"
    //           placeholder="Enter your message here."
    //           name="message"
    //         />
    //       </Form.Group>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col md={12} className="d-flex justify-content-lg-end">
    //       {/* <Recaptcha
    //         ref="recaptcha"
    //         sitekey={process.env.GATSBY_RECAPTCHA_KEY}
    //         size="normal"
    //         id="recaptcha-google"
    //       /> */}
    //       <Button className="mr-3" type="reset" value="Eraser">
    //         Clear
    //       </Button>
    //       <Button type="submit">Send</Button>
    //     </Col>
    //   </Row>
    // </Form>
  )
}
