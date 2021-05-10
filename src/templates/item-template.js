import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parallax } from "react-scroll-parallax"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import PopularItems from "../components/popular-items"
import styled from "styled-components"
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
            aspectRatio={256 / 90}
            placeholder="blurred"
            loading="eager"
          />
        </Parallax>
        <Container>
          <Row>
            <Col sm={12} className="mb-5">
              <GatsbyImage
                image={data.contentfulMenu.featuredImage.gatsbyImageData}
                alt={data.contentfulMenu.title}
                style={{ maxWidth: `250px` }}
              />
              <h4 className="mt-4 mb-2">{data.contentfulMenu.title}</h4>
              {data.contentfulMenu.fullDescription !== null ? (
                <div>
                  {renderRichText(data.contentfulMenu.fullDescription, options)}
                </div>
              ) : (
                <div>
                  {renderRichText(data.contentfulMenu.description, options)}
                </div>
              )}
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
  query($slug: String!) {
    contentfulMenu(slug: { eq: $slug }) {
      title
      slug
      featuredImage {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
      }
      description {
        raw
      }
      fullDescription {
        raw
      }
    }
    file(relativePath: { eq: "slides/template-slides/template-slide-1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
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
