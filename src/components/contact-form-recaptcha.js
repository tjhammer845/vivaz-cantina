import React, { setState } from "react"
import styled from "styled-components"
import Recaptcha from "react-google-recaptcha"
import { navigate } from "gatsby"
import { Button, Col, Form, Row } from "react-bootstrap"
import { breakpoints } from "../utils/breakpoints"

const RECAPTCHA_KEY = process.env.GATSBY_RECAPTCHA_KEY

export default function ContactForm() {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef() // new Ref for reCaptcha
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contactVivaz",
        "g-recaptcha-response": recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <Form
      data-netlify="true"
      name="contactVivaz"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      action="/thank-you"
      onSubmit={handleSubmit}
    >
      <Row>
        <Col md={12}>
          <h3>Message Us</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group hidden>
            <input name="form-name" value="contactVivaz" />
            <input name="bot-field" />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="first-name">First Name</Form.Label>
            <Form.Control
              required
              size="lg"
              type="text"
              name="first-name"
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="phone">Phone (Optional)</Form.Label>
            <Form.Control
              size="lg"
              type="tel"
              name="phone"
              onChange={handleChange}
            />
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
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormControls>
            <Recaptcha
              ref={recaptchaRef}
              sitekey={RECAPTCHA_KEY}
              size="normal"
              id="recaptcha-google"
              onChange={() => setButtonDisabled(false)} // disable the disabled button!
              className="mb-3"
            />
            <div>
              <Button className="mr-3" type="reset" value="Eraser">
                Clear
              </Button>
              <Button type="submit" disabled={buttonDisabled}>
                Send
              </Button>
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
  button[disabled] {
    cursor: not-allowed;
  }
`
