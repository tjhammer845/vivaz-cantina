import * as React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/home-slideshow"
import SEO from "../components/seo"
import InstagramFeed from "../components/instagram-feed"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import { variables } from "../utils/variables"
import PopularItems from "../components/popular-items"

const IndexPage = () => (
  <HomeContainer>
    <Layout>
      <SEO title="Home" />
      <Slideshow />
      <Container className="mt-5 mb-4">
        <Row>
          <Col sm={12}>
            <h2>Welcome to the best Mexican Food in New Haven!</h2>
            <p>
              Turpis nunc eget lorem dolor. <a href="/">Maecenas accumsan</a>{" "}
              lacus vel facilisis volutpat est velit egestas dui. Sit amet
              porttitor eget dolor morbi non. Massa sed elementum tempus egestas
              sed sed. Diam vel quam elementum pulvinar etiam. Pharetra diam sit
              amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas
              tellus rutrum tellus pellentesque eu tincidunt tortor. Eget velit
              aliquet sagittis id.
            </p>
            <p>
              Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
              Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
              fringilla ut morbi tincidunt augue interdum velit. Sapien nec
              sagittis aliquam malesuada bibendum. Et tortor consequat id porta
              nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices
              mi tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
              fermentum dui faucibus in. A pellentesque sit amet porttitor eget
              dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
              gravida cum sociis natoque penatibus et magnis dis.
            </p>
          </Col>
        </Row>
      </Container>
      <PopularItems />
      <InstagramFeed />
    </Layout>
  </HomeContainer>
)
export default IndexPage
const HomeContainer = styled.div`
  background: ${variables.paleYellow};
  padding-top: 10rem;
`
