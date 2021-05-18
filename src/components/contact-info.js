import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"

export default function ContactInfo() {
  return (
    <StyledInfoContainer>
      <h3>Contact Information</h3>
      <p>
        <FontAwesomeIcon icon={faPhone} /> (203) 553-7914
      </p>
      <p className="d-flex">
        <FontAwesomeIcon icon={faMapPin} /> 161 Park Street,
        <br /> New Haven, CT 06511
      </p>
      <p className="d-flex mb-0">
        <FontAwesomeIcon icon={faHourglassHalf} />
        <span>
          <strong className="mr-2">Mon-Fri</strong>10:30am - 11:00pm
          <br />
          <strong className="mr-2">Sat/Sun</strong>9:30am - 1:00am
        </span>
      </p>
    </StyledInfoContainer>
  )
}
const StyledInfoContainer = styled.div`
  background: ${variables.paleYellow};
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 3rem;
  min-width: 100%;
  p {
    span {
      display: block;
    }
    svg {
      color: ${variables.green};
      width: 1.5rem !important;
      height: 1.5rem !important;
      margin-right: 1rem;
    }
  }
  @media ${breakpoints.lg} {
    background: transparent;
    float: right;
    min-width: 282px;
    padding: 0;
    margin: 0;
  }
`
