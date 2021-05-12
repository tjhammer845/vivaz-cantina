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
import TruncateMarkup from "react-truncate-markup"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => (
  <TruncateMarkup lines={2}>
    <p className="align-left">{children}</p>
  </TruncateMarkup>
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
    <SEO title="Menu" />
    <Slideshow />
    <MenuContainer>
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
          <Row className="justify-content-md-between pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Appetizers" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`appetizer-item-${item.slug}`}
                  >
                    <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <Link to={`/${item.slug}`} title={item.title}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        />
                        <span className="p-2 font-weight-bold">
                          {item.currency}
                          {item.price}
                        </span>
                        <TruncateMarkup lines={1}>
                          <h3>{item.title}</h3>
                        </TruncateMarkup>
                        <div>{renderRichText(item.description, options)}</div>
                      </Link>
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
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`main-courses-item-${item.slug}`}
                  >
                    <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <Link to={`/${item.slug}`} title={item.title}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        />
                        <span className="p-2 font-weight-bold">
                          {item.currency}
                          {item.price}
                        </span>
                        <TruncateMarkup lines={1}>
                          <h3>{item.title}</h3>
                        </TruncateMarkup>
                        <div>{renderRichText(item.description, options)}</div>
                      </Link>
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
                  <Col md={4} sm={6} xs={12} key={`desserts-item-${item.slug}`}>
                    <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <Link to={`/${item.slug}`} title={item.title}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        />
                        <span className="p-2 font-weight-bold">
                          {item.currency}
                          {item.price}
                        </span>
                        <TruncateMarkup lines={1}>
                          <h3>{item.title}</h3>
                        </TruncateMarkup>
                        <div>{renderRichText(item.description, options)}</div>
                      </Link>
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
                  <Col md={4} sm={6} xs={12} key={`drinks-item-${item.slug}`}>
                    <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <Link to={`/${item.slug}`} title={item.title}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        />
                        <span className="p-2 font-weight-bold">
                          {item.currency}
                          {item.price}
                        </span>
                        <TruncateMarkup lines={1}>
                          <h3>{item.title}</h3>
                        </TruncateMarkup>
                        <div>{renderRichText(item.description, options)}</div>
                      </Link>
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
                    md={4}
                    sm={6}
                    xs={12}
                    key={`wine-and-beer-item-${item.slug}`}
                  >
                    <div className="bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <Link to={`/${item.slug}`} title={item.title}>
                        <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        />
                        <span className="p-2 font-weight-bold">
                          {item.currency}
                          {item.price}
                        </span>
                        <TruncateMarkup lines={1}>
                          <h3>{item.title}</h3>
                        </TruncateMarkup>
                        <div>{renderRichText(item.description, options)}</div>
                      </Link>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </WineBeerSection>
      <EndSection className="shadow">
        <Container>
          <Row>
            <Col sm={12} className="text-center">
              <h2 className="mt-5">
                Disclaimer: pricing and availability subject to change.
              </h2>
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
    </MenuContainer>
  </Layout>
)
export default Menu
export const query = graphql`
  {
    item: allContentfulMenu(sort: { fields: featuredImage___updatedAt }) {
      nodes {
        menuSection
        title
        currency
        price
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
const MenuContainer = styled.div`
  h3 {
    color: black;
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
  a {
    h3 {
      transition: all 1s ease;
    }
    picture {
      img {
        transition: all 0.7s ease !important;
      }
    }
    span {
      position: absolute;
      top: 1.05rem;
      right: 1.9rem;
      font-size: 0.85rem;
      color: white;
      background: ${variables.transLightPurple};
    }
    &:hover {
      picture {
        img {
          filter: blur(3px) saturate(200%);
        }
      }
      h3 {
        color: ${variables.bloodOrange};
      }
      span {
        color: ${variables.yellow};
      }
      p {
        color: #000;
      }
    }
  }
`
const TitleSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
  padding: 18rem 0 3rem;
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
  padding: 3rem 0 5rem;
}
`
