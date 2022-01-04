import React from "react"
import Layout from "../components/layout"
import PopularItems from "../components/popular-items"
import SEO from "../components/seo"
import { Container, Button, Col, Row } from "react-bootstrap"
import styled from "styled-components"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { navigate, graphql } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { Parallax } from "react-scroll-parallax"
import { breakpoints } from "../utils/breakpoints"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-left">{children}</p>

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
const ItemTemplate = ({ data }) => {
  const image = getImage(data.file)
  return (
    <Layout>
      <SEO title={data.contentfulMenu.title} />
      <TemplateContainer>
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
            <Col sm={12} className="mb-5">
              {/* <GatsbyImage
                image={data.contentfulMenu.featuredImage.gatsbyImageData}
                alt={data.contentfulMenu.title}
                style={{ maxWidth: `250px` }}
              /> */}

              <h3 className="mt-4 mb-2">
                {data.contentfulMenu.title}{" "}
                {data.contentfulMenu.cost !== null ? (
                      <span className="p-2 font-weight-bold">
                        {data.contentfulMenu.currency}
                        {data.contentfulMenu.cost}
                      </span>
                    ) : (<span></span>)}
              </h3>
              { data.contentfulMenu.description !== null ? (
                <div>
                  {renderRichText(data.contentfulMenu.description, options)}
                </div>
              ) : (
                <span></span>
              )}
              <Button
                className="button mt-5"
                onClick={() => {
                  navigate("/menu/")
                }}
                title="View Menu"
              >
                View Menu
              </Button>
            </Col>
          </Row>
        </Container>
        <PopularItems />
      </TemplateContainer>
    </Layout>
  )
}

export default ItemTemplate

export const query = graphql`
  query {
    contentfulMenu {
      title
      currency
      cost
      slug
      # featuredImage {
      #   gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
      # }
      description {
        raw
      }
    }
    file(relativePath: { eq: "slides/template-slides/template-slide-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.84)
      }
    }
  }
`
const TemplateContainer = styled.div`
  padding-top: 7rem;
  @media ${breakpoints.sm} {
    padding-top: 6rem;
  }
  @media ${breakpoints.md} {
    padding-top: 0;
  }
`
