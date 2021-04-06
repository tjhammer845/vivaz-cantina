import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from 'react-bootstrap/Container'


const ItemTemplate = ({ data: { item } }) => (
    <Layout>
        <Container
            style={{
                marginTop: `2rem`,
            }}>
            <div style={{ maxWidth: `250px` }}>
                <GatsbyImage
                    image={item.featuredImage.gatsbyImageData}
                    alt={item.title} />
            </div>
            <h2 style={{
                marginTop: `2rem`,
            }}>{item.title}</h2>
            {(item.fullDescription !== null) ?
                <div> {renderRichText(item.fullDescription, {})}</div> :
                <div>{renderRichText(item.description, {})}</div>
            }
        </Container>
    </Layout >
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