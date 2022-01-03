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
    <p className="align-left mb-0">{children}</p>
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
      # item: allContentfulMenu(sort: { fields: featuredImage___updatedAt }) {
      item: allContentfulMenu(sort: { fields: title }) {
        nodes {
          title
          currency
          cost
          slug
          popular
          description {
            raw
          }
          # featuredImage {
          #   gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1)
          # }
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
                <Col
                  md={4}
                  sm={6}
                  xs={12}
                  className="menu-item"
                  key={`${item.slug}`}
                >
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
                    <h3>{item.title}</h3>
                    {item.description !== null ? (
                      <div className="menu-description">{renderRichText(item.description, options)}</div>
                    ) : (<span></span>)}
                  </div>
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
  padding-bottom: 1rem;
  @media ${breakpoints.md} {
    padding-top: 3rem;
    padding-bottom: 2rem;
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
  .menu-item {
    min-height: 8rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${variables.transWhiteFull};
    margin-bottom: 2rem;
    div {
      width: 100%;
      h3 {
        width: calc(100% - 3.5rem);
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 0.5rem;
      }
      .menu-description {
        font-size: 0.75rem;
      }
      h3,
      p {
        color: white;
        transition: all 1s ease;
      }
      picture {
        img {
          transition: all 0.7s ease !important;
        }
      }
      span {
        position: absolute;
        top: 0px;
        right: 0;
        font-size: 0.85rem;
        color: white;
        background: ${variables.transLightPurple};
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
      }
      &:hover {
        picture {
          img {
            filter: blur(3px) saturate(200%);
          }
        }
        h3,
        p,
        span {
          color: ${variables.yellow};
        }
      }
    }
  }
`
