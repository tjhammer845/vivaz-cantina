import * as React from "react"
import * as styles from "../components/css/about-css-modules.module.css"
// import InstagramFeed from "../components/instagram-feed"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import { breakpoints } from "../utils/breakpoints"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h3 className={styles.username}>{props.username}</h3>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
const about = () => {
  const data = useStaticQuery(graphql`
    query {
      item: file(
        relativePath: { eq: "slides/about-slides/about-slide-1.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.84)
        }
      }
    }
  `)
  const image = getImage(data.item)
  return (
    <Layout>
      <SEO title="About" />
      <AboutContainer>
        <Parallax y={[-50, 50]} tagOuter="figure">
          <GatsbyImage
            image={image}
            alt="About Vivaz Cantina"
            placeholder="blurred"
            loading="lazy"
          />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12}>
              <h2>About Vivaz Cantina</h2>
              <p>
                We're working on it. Content coming soon!
              </p>
            </Col>
          </Row>
        </Container>
      </AboutContainer>
      {/* <InstagramFeed /> */}
    </Layout>
  )
}
export default about
const AboutContainer = styled.div`
  padding-top: 7rem;
  @media ${breakpoints.sm} {
    padding-top: 6rem;
  }
  @media ${breakpoints.md} {
    padding-top: 0;
  }
`
