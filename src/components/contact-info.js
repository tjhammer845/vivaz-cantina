import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"

export default function ContactInfo() {
  return (
    <StyledInfoContainer>
      <h3>Contact Information</h3>
      <p>
        <FontAwesomeIcon icon={faPhone} /> (475) 238-6390
      </p>
      <p className="d-flex">
        <FontAwesomeIcon icon={faMapPin} /> 161 Park Street,
        <br /> New Haven, CT 06511
      </p>
      <p className="d-flex mb-0">
        <FontAwesomeIcon icon={faClock} />
        <span>Tuesday - Sunday:<br/> 4pm - 12am
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
    font-size: 0.85rem;
    span {
      display: block;
    }
    svg {
      color: ${variables.green};
      width: 1.25rem !important;
      height: 1.25rem !important;
      margin-right: 0.5rem;
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
