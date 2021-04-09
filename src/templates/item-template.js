import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "react-bootstrap/Container"

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
    <Container
      style={{
        marginTop: `2rem`,
      }}
    >
      <div style={{ maxWidth: `250px` }}>
        <GatsbyImage
          image={item.featuredImage.gatsbyImageData}
          alt={item.title}
        />
      </div>
      <h2
        style={{
          marginTop: `2rem`,
        }}
      >
        {item.title}
      </h2>
      {item.fullDescription !== null ? (
        <div> {renderRichText(item.fullDescription, options)}</div>
      ) : (
        <div>{renderRichText(item.description, options)}</div>
      )}
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
