import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"

const SlideShow = () => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          id
          relativePath
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
          }
        }
      }
    }
  `)
  return (
    <MenuSlideshowContainer>
      <Carousel fade autoplay={true} controls={false} indicators={false}>
        {data.backgrounds.nodes.map(image => (
          <Carousel.Item key={image.id}>
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt="Menu Background"
              placeholder="blurred"
              loading="lazy"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </MenuSlideshowContainer>
  )
}
export default SlideShow
const MenuSlideshowContainer = styled.div`
  position: absolute;
  z-index: -1;
  .gatsby-image-wrapper {
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`
