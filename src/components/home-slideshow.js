import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"

const SlideShow = () => {
  const data = useStaticQuery(graphql`
    query {
      slide: allFile(
        filter: {
          relativeDirectory: { eq: "slides/home-slides" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
        sort: { fields: relativePath, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  return (
    <CarouselContainer>
      <Carousel>
        {data.slide.edges.map(image => (
          <Carousel.Item key={image.node.id}>
            <GatsbyImage
              image={image.node.childImageSharp.gatsbyImageData}
              alt={image.node.base.split("-").join(" ").split(".")[0]}
            />
            <Carousel.Caption>
              <p>{image.node.base.split("-").join(" ").split(".")[0]}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselContainer>
  )
}
export default SlideShow
const CarouselContainer = styled.div`
  margin-top: 6rem;
  @media ${breakpoints.md} {
    margin-top: 0;
  }
`
