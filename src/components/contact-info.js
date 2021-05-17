import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
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
      <p className="d-flex">
        <FontAwesomeIcon icon={faHourglassHalf} />
        <div>
          <strong className="mr-2">Mon-Fri</strong>10:30am - 11:00pm
          <br />
          <strong className="mr-2">Sat/Sun</strong>9:30am - 1:00am
        </div>
      </p>
    </StyledInfoContainer>
  )
}
const StyledInfoContainer = styled.div`
  p {
    svg {
      color: ${variables.green};
      width: 1.5rem !important;
      height: 1.5rem !important;
      margin-right: 1rem;
    }
  }
`
