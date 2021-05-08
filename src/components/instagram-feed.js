import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const InstagramFeed = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent {
        edges {
          node {
            localImage {
              childImageSharp {
                fixed(width: 200, height: 200) {
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
      <div
        style={{ maxWidth: `900px`, marginBottom: `1.45rem`, display: "flex" }}
      >
        {arrayOfInstaImages.map((item, i) => {
          return (
            <div key={i} style={{ width: "200px", height: "200px" }}>
              <Img fixed={item.node.localImage.childImageSharp.fixed} />
            </div>
          )
        })}
      </div>
    </IgFeedContainer>
  )
}
export default InstagramFeed
const IgFeedContainer = styled.div`
  margin-top: 6rem;
  @media ${breakpoints.md} {
    margin-top: 0;
  }
`
