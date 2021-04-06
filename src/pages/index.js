import * as React from "react"
import { graphql, Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../components/layout"
import Slider from "../components/slideshow"
import SEO from "../components/seo"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GatsbyImage } from "gatsby-plugin-image"



const IndexPage = ({ data: { item } }) => (
    <Layout>
        <SEO title="Home" />
        <Slider />
        <Container
            style={{
                marginTop: `2rem`,
            }}>
            <h2>Welcome to VivaZ Cantina, the most authentic Mexican gourmet in New Haven!</h2>
            <p>Turpis nunc eget lorem dolor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Sit amet porttitor eget dolor morbi non. Massa sed elementum tempus egestas sed sed. Diam vel quam elementum pulvinar etiam. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Eget velit aliquet sagittis id.</p>
            <p>Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum. Et tortor consequat id porta nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. A pellentesque sit amet porttitor eget dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget gravida cum sociis natoque penatibus et magnis dis.</p>
            <Row className='justify-content-md-between'>
                {item.nodes
                    .map(item => {
                        return (item.popular === true) &&
                            <Col md={4} sm={12} className="m-0" key={`popular-item-${item.slug}`}>
                                <Link to={`/${item.slug}`} title={item.title}>
                                    <GatsbyImage
                                        image={item.featuredImage.gatsbyImageData}
                                        alt={item.title} />
                                    <h3 style={{
                                        marginTop: `2rem`,
                                    }}>{item.title}</h3>
                                </Link>
                                <div>
                                    {renderRichText(item.description, {})}
                                </div>
                            </Col>
                    })
                }
            </Row>
        </Container>
    </Layout>
)

export default IndexPage
export const query = graphql`
{
  item: allContentfulMenu {
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
`