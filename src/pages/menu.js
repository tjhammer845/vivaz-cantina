import * as React from "react"
import Layout from "../components/layout"
import Slideshow from "../components/menu-bg-slideshow"
import SEO from "../components/seo"
import { Container, Col, Row } from "react-bootstrap"
import TruncateMarkup from "react-truncate-markup"
import styled from "styled-components"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { variables } from "../utils/variables"

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
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <TruncateMarkup lines={2}>
        <p>{children}</p>
      </TruncateMarkup>
    ),
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
      <IntroSection>
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
      </IntroSection>
      <CocktailsSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Cocktails</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Cocktails" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </CocktailsSection>
      <BeerSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Beer</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Beer" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </BeerSection>
      <WineSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Wine</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Wine" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </WineSection>
      <AperitivosSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Aperitivos</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Aperitivos" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </AperitivosSection>
      <TacosSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Tacos</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Tacos" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </TacosSection>
      <MeatlessSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Meatless</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Meatless" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </MeatlessSection>
      <PlatosSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Platos</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Platos" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </PlatosSection>
      <SaladSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Salad</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Salad" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </SaladSection>
       <SoupSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Soup</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Soup" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </SoupSection>
      <AlAmericanoSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Al Americano</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Al Americano" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </AlAmericanoSection>
      <PostreSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Postre</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Postre" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </PostreSection>
      <AddOnSection>
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="mt-5 mb-4">Add on</h2>
            </Col>
          </Row>
          <Row className="justify-content-md-start pb-5">
            {item.nodes.map(item => {
              return (
                item.menuSection === "Add on" && (
                  <Col
                    md={4}
                    sm={6}
                    xs={12}
                    key={`${item.slug}`}
                  >
                    <div className="menu-item bg-white border rounded pb-0 pt-3 pl-3 pr-3 mb-4">
                      <div>
                        {/* <GatsbyImage
                          image={item.featuredImage.gatsbyImageData}
                          alt={item.title}
                        /> */}
                        {item.cost !== null ? (
                          <span className="p-2 font-weight-bold">
                            {item.currency}
                            {item.cost}
                          </span>
                        ) : (<span></span>)}
                        <TruncateMarkup lines={1}>
                          <h3 className="mt-3">{item.title}</h3>
                        </TruncateMarkup>
                        {item.description !== null ? (
                          <div className="menu-description">{renderRichText(item.description, options)}</div>
                        ) : (<span></span>)}
                      </div>
                    </div>
                  </Col>
                )
              )
            })}
          </Row>
        </Container>
      </AddOnSection>
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
    # item: allContentfulMenu(sort: { fields: featuredImage___updatedAt }) {
    item: allContentfulMenu(sort: { fields: title }) {
      nodes {
        menuSection
        title
        currency
        cost
        slug
        description {
          raw
        }
        # featuredImage {
        #   gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
        # }
      }
    }
  }
`
const MenuContainer = styled.div`
  h2 {
    color: black;
    font-size: 2rem;
  }
  .menu-item {
    min-height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      width: 100%;
      h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        transition: all 1s ease;
      }
      picture {
        img {
          transition: all 0.7s ease !important;
        }
      }
      span {
        position: absolute;
        top: 0.05rem;
        right: 0.85rem;
        border-radius: 0 0.25rem 0 0;
        font-size: 0.85rem;
        color: white;
        background: ${variables.transLightPurple};
        box-shadow: inset 1px 0 0 0 rgba(0, 0, 0, 0.2);
      }
      .menu-description {
        font-size: 0.75rem;
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
  }
`
const IntroSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
  padding: 18rem 0 3rem;
}
`
const CocktailsSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transYellow};
}
`
const BeerSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transGreen};
}
`
const WineSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transOrange};
}
`
const AperitivosSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transBlue};
}
`
const TacosSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transLightPurple};
}
`
const MeatlessSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
}
`
const PlatosSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transYellow};
}
`
const SaladSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transGreen};
}
`
const SoupSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transOrange};
}
`
const AlAmericanoSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transBlue};
  padding: 3rem 0 5rem;
}
`
const PostreSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transLightPurple};
}
`
const AddOnSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transWhite};
  padding: 3rem 0 5rem;
}
`
const EndSection = styled.div`
  display: flex;
  width: 100%;
  transition: background 300ms;
  background: ${variables.transYellow};
  padding: 3rem 0 5rem;
}
`
