import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

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
const ItemTemplate = ({ data: { item } }) => (
  <Layout>
    <SEO title={item.title} />
    <Parallax y={[-60, 20]} tagOuter="figure">
      <StaticImage
        src="../images/slides/about-slides/about-slide-1.jpg"
        alt="About Vivaz Cantina"
        formats={["AUTO", "WEBP", "AVIF"]}
        aspectRatio={256 / 90}
        layout="fullWidth"
        placeholder="blurred"
        loading="eager"
      />
    </Parallax>
    <Container>
      <Row>
        <Col sm={12} className="mb-5">
          <GatsbyImage
            image={item.featuredImage.gatsbyImageData}
            alt={item.title}
            style={{ maxWidth: `250px` }}
          />
          <h4 className="mt-4 mb-2">{item.title}</h4>
          {item.fullDescription !== null ? (
            <div> {renderRichText(item.fullDescription, options)}</div>
          ) : (
            <div>{renderRichText(item.description, options)}</div>
          )}
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ItemTemplate

export const query = graphql`
  query($slug: String!) {
    item: contentfulMenu(slug: { eq: $slug }) {
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
  }
`
