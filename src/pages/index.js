import * as React from "react"
import InstagramFeed from "../components/instagram-feed"
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
                Think VivaZ Cantina for gourmet Mexican food in New Haven, CT.
              </h2>
              <p>
                With over 20 years of culinary experience, Chef Bernardino Lanche brings
                his passion for food and love of his family and community to
                 every dish served at VivaZ Cantina. A favorite
                among residents in New Haven, VivaZ Cantina is committed to
                using only fresh, local ingredients to deliver the best possible
                Mexican experience.
              </p>
              <p>
                Here at VivaZ Cantina, we are proud to offer our community
                Mexican dining like no other. By the time you leave, you will not only
                have your appetite satisfied beyond measure, but also consider
                yourself a part of the family! Making great memories
                around the table is what we are all about. We are
                passioniate about customer service and dedicated to providing
                 the best Mexican cuisine in Connecticut.
              </p>
            </Col>
          </Row>
        </Container>
      </HomeContent>
      <PopularItems />
      <InstagramFeed />
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
