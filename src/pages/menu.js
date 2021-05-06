import * as React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import Slideshow from "../components/menu-bg-slideshow"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { GatsbyImage } from "gatsby-plugin-image"
import { variables } from "../utils/variables"
import styled from "styled-components"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => (
  <p
    className="align-left"
    style={{
      fontSize: ".85rem",
    }}
  >
    {children}
  </p>
)

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}
const Menu = ({ data: { item } }) => (
  <Layout>
    <Slideshow />
    <TitleSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2>Our Menu</h2>
            <p>
              Come in to Vivaz Cantina for the best Mexican-inspired brunch
              every Saturday and Sunday from 9am - 1pm. Our Menu is constantly
              changing to capture the best of authentic Mexican soul foods in
              every one of our traditional dish.
            </p>
          </Col>
        </Row>
      </Container>
    </TitleSection>
    <AppetizersSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="mt-5 mb-2">Appetizers</h2>
            <p>Appetizers Description</p>
          </Col>
        </Row>
        <Row className="justify-content-md-between">
          {item.nodes.map(item => {
            return (
              item.menuSection === "Appetizers" && (
                <Col sm={4} xs={6} key={`appetizer-item-${item.slug}`}>
                  <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                    <Link to={`/${item.slug}`} title={item.title}>
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        alt={item.title}
                      />
                      <StyledH4>{item.title}</StyledH4>
                    </Link>
                    <div>{renderRichText(item.description, options)}</div>
                  </div>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </AppetizersSection>
    <MainCoursesSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="mt-5 mb-2">Main Courses</h2>
            <p>Main Courses Description</p>
          </Col>
        </Row>
        <Row className="justify-content-md-between pb-5">
          {item.nodes.map(item => {
            return (
              item.menuSection === "Main Courses" && (
                <Col sm={4} xs={6} key={`main-courses-item-${item.slug}`}>
                  <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                    <Link to={`/${item.slug}`} title={item.title}>
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        alt={item.title}
                      />
                      <StyledH4>{item.title}</StyledH4>
                    </Link>
                    <div>{renderRichText(item.description, options)}</div>
                  </div>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </MainCoursesSection>
    <DessertsSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="mt-5 mb-2">Desserts</h2>
            <p>Desserts Description</p>
          </Col>
        </Row>
        <Row className="justify-content-md-between pb-5">
          {item.nodes.map(item => {
            return (
              item.menuSection === "Desserts" && (
                <Col
                  sm={4}
                  xs={6}
                  // className="m-0"
                  key={`desserts-item-${item.slug}`}
                >
                  <div className="bg-white border rounded pt-3 pl-3 pr-3 mb-4">
                    <Link to={`/${item.slug}`} title={item.title}>
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        alt={item.title}
                      />
                      <StyledH4>{item.title}</StyledH4>
                    </Link>
                    <div>{renderRichText(item.description, options)}</div>
                  </div>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </DessertsSection>
    <DrinksSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="mt-5 mb-2">Drinks</h2>
            <p>Drinks Description</p>
          </Col>
        </Row>
        <Row className="justify-content-md-between pb-5">
          {item.nodes.map(item => {
            return (
              item.menuSection === "Drinks" && (
                <Col
                  sm={4}
                  xs={6}
                  // className="m-0"
                  key={`drinks-item-${item.slug}`}
                >
                  <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                    <Link to={`/${item.slug}`} title={item.title}>
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        alt={item.title}
                      />
                      <StyledH4>{item.title}</StyledH4>
                    </Link>
                    <div>{renderRichText(item.description, options)}</div>
                  </div>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </DrinksSection>
    <WineBeerSection>
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="mt-5 mb-2">Wine and Beer</h2>
            <p>Wine and Beer Description</p>
          </Col>
        </Row>
        <Row className="justify-content-md-between pb-5">
          {item.nodes.map(item => {
            return (
              item.menuSection === "Wine and Beer" && (
                <Col
                  sm={4}
                  xs={6}
                  // className="m-0"
                  key={`wine-and-beer-item-${item.slug}`}
                >
                  <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                    <Link to={`/${item.slug}`} title={item.title}>
                      <GatsbyImage
                        image={item.featuredImage.gatsbyImageData}
                        alt={item.title}
                      />
                      <StyledH4>{item.title}</StyledH4>
                    </Link>
                    <div>{renderRichText(item.description, options)}</div>
                  </div>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </WineBeerSection>
    <EndSection>
      <Container>
        <Row>
          <Col sm={12} className="text-center">
            <h3 className="mt-5">
              Disclaimer: pricing and availability subject to change.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    </EndSection>
  </Layout>
)
export default Menu
export const query = graphql`
  {
    item: allContentfulMenu(sort: { fields: featuredImage___updatedAt }) {
      nodes {
        menuSection
        title
        slug
        description {
          raw
        }
        featuredImage {
          gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
        }
      }
    }
  }
`
const StyledH4 = styled.h4`
  color: black;
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`
const TitleSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
  padding: 8rem 0 3rem;
}
`
const AppetizersSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transYellow};
}
`
const MainCoursesSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transGreen};
}
`
const DessertsSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transOrange};
}
`
const DrinksSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transBlue};
}
`
const WineBeerSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transLightPurple};
}
`
const EndSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
  padding: 3rem 0 8rem;
}
`
