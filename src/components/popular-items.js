import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import styled from "styled-components"
import { variables } from "../utils/variables"
import { breakpoints } from "../utils/breakpoints"
import TruncateMarkup from "react-truncate-markup"

const Bold = ({ children }) => (
  <span className="bold text-white">{children}</span>
)
const Text = ({ children }) => (
  <TruncateMarkup lines={2}>
    <p className="align-left mb-0 text-white">{children}</p>
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

const PopularItems = () => {
  const data = useStaticQuery(graphql`
    query {
      item: allContentfulMenu(sort: { fields: featuredImage___updatedAt }) {
        nodes {
          title
          slug
          popular
          description {
            raw
          }
          featuredImage {
            gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
          }
        }
      }
    }
  `)
  return (
    <PopularContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <h2>Try some of our Favorite Bites!</h2>
          </Col>
        </Row>
        <Row>
          {data.item.nodes.map(item => {
            return (
              item.popular === true && (
                <Col md={3} sm={4} xs={6} key={`popular-item-${item.slug}`}>
                  <Link to={`/${item.slug}`} title={item.title}>
                    <GatsbyImage
                      image={item.featuredImage.gatsbyImageData}
                      alt={item.title}
                    />
                    <h3>{item.title}</h3>
                    <div>{renderRichText(item.description, options)}</div>
                  </Link>
                </Col>
              )
            )
          })}
        </Row>
      </Container>
    </PopularContainer>
  )
}
export default PopularItems
const PopularContainer = styled.div`
  background: ${variables.green};
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media ${breakpoints.md} {
    padding-top: rem;
    padding-botom: 3rem;
  }
  h2 {
    font-weight: bold;
    color: white;
  }
  h3 {
    color: white;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`
