import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, Link, graphql } from "gatsby"
import _get from "lodash/get"
import styled from "styled-components"
import { variables } from "../utils/variables"
import { breakpoints } from "../utils/breakpoints"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import TruncateMarkup from "react-truncate-markup"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./css/mltp-carousel.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
}

const InstagramFeed = props => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
      allInstagramContent(
        sort: { fields: localImage___modifiedTime, order: DESC }
      ) {
        edges {
          node {
            caption
            username
            permalink
            localImage {
              childImageSharp {
                gatsbyImageData(
                  transformOptions: { cropFocus: CENTER }
                  layout: FULL_WIDTH
                  aspectRatio: 1
                )
              }
            }
          }
        }
      }
    }
  `)
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide, totalItems, slidesToShow },
    } = rest

    return (
      <div className="mltp-carousel-button-group">
        <button
          aria-label="Go to previous slide"
          className={
            currentSlide === 0
              ? "disable"
              : "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
          }
          onClick={() => previous()}
        ></button>
        <button
          aria-label="Go to next slide"
          className={
            currentSlide === totalItems - slidesToShow
              ? "disable"
              : "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
          }
          onClick={() => next()}
        ></button>
      </div>
    )
  }
  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")
  return (
    <IgFeedContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="text-white">
              Follow us on Instagram for Promotions and Updates!
            </h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="p-0">
            <Carousel
              responsive={responsive}
              containerClass="mltp-carousel-container"
              itemClass="mltp-carousel-item"
              swipeable={true}
              draggable={true}
              showDots={false}
              ssr={true}
              infinite={true}
              autoPlay={props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={1200}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={props.deviceType}
              arrows={false}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
            >
              {arrayOfInstaImages.map((item, i) => {
                return (
                  <div key={i} className="mt-3 m-3">
                    <Link
                      target="_blank"
                      to={`${item.node.permalink}`}
                      title={`@${item.node.username}`}
                    >
                      <GatsbyImage
                        image={
                          item.node.localImage.childImageSharp.gatsbyImageData
                        }
                        alt={`@${item.node.username}`}
                        placeholder="blurred"
                        loading="eager"
                      />

                      <TruncateMarkup lines={2}>
                        <p className="text-white">{item.node.caption}</p>
                      </TruncateMarkup>
                    </Link>
                  </div>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </IgFeedContainer>
  )
}
export default InstagramFeed
const IgFeedContainer = styled.div`
  background: ${variables.darkOrange};
  box-shadow: inset 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media ${breakpoints.md} {
    padding-top: 3rem;
    padding-botom: 3rem;
  }
  h2 {
    font-weight: bold;
  }
  p {
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
`
