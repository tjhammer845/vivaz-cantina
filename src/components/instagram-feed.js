import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import styled from "styled-components"
import { variables } from "../utils/variables"
import { breakpoints } from "../utils/breakpoints"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(
        sort: { fields: localImage___modifiedTime, order: DESC }
      ) {
        edges {
          node {
            caption
            localImage {
              childImageSharp {
                fixed(width: 250, height: 250) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
  return (
    <IgFeedContainer>
      <Container>
        <Row className="justify-content-md-between">
          <Col sm={12}>
            <h2 className="text-white">
              Follow us on Instagram for Promotions and Updates!
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-between">
          {arrayOfInstaImages.map((item, i) => {
            return (
              <Col xs={12} sm={6} md={3} key={i} className="mt-3 mb-3">
                <Img fixed={item.node.localImage.childImageSharp.fixed} />
                <p className="text-white">{item.node.caption}</p>
              </Col>
            )
          })}
        </Row>
      </Container>
    </IgFeedContainer>
  )
}
export default InstagramFeed
const IgFeedContainer = styled.div`
  background: ${variables.darkOrange};
  box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.8);
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  @media ${breakpoints.md} {
    padding-top: 5rem;
    padding-botom: 5rem;
    margin-bottom: 5rem;
  }
  h2 {
    font-weight: bold;
  }
`
