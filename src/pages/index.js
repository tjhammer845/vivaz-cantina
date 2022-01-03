import * as React from "react"
// import InstagramFeed from "../components/instagram-feed"
import Layout from "../components/layout"
import PopularItems from "../components/popular-items"
import Slideshow from "../components/home-slideshow"
import SEO from "../components/seo"
import { Container, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import { variables } from "../utils/variables"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContainer>
      <Slideshow />
      <HomeContent>
        <Container className="pt-5 pb-4">
          <Row>
            <Col sm={12}>
              <h2>
                Proudly serving gourmet Mexican food from the heart in New
                Haven, CT
              </h2>
              <p>
                With over 20 years of experience, Chef Bernardino Lanche brings
                his passion for food, and love of his family and community to
                each and every dish prepared here at Vivaz Cantina. A favorite
                among residents in New Haven, Vivaz Cantina is committed to
                using only the freshest ingredients to deliver the best possible
                Mexican experience in everything we create and serve!
              </p>
              <p>
                Here at Vivaz Cantina we are proud to offer our community a
                Mexican dining experience like no other. From the moment you
                walk through the door, you will be welcomed with open arms and
                we are confident that by the time you leave you will not only
                have your appetite satisfied beyond measure, but also consider
                yourself a part of the Vivaz family! Making beautiful memories
                around our dining tables is what we are all about! We are
                passioniate about customer service and dedicated to preparing
                and serving the best Mexican cuisine in the New Haven area.
              </p>
            </Col>
          </Row>
        </Container>
      </HomeContent>
      <PopularItems />
      {/* <InstagramFeed /> */}
    </HomeContainer>
  </Layout>
)
export default IndexPage
const HomeContainer = styled.div`
  padding-top: 4rem;
  @media ${breakpoints.md} {
    padding-top: 10rem;
  }
`
const HomeContent = styled.div`
  background: ${variables.paleYellow};
`
