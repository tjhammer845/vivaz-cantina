import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import * as styles from "../components/menu-css-modules.module.css"
import { css } from "@emotion/react"
import { rhythm } from "../utils/typography"

const Dish = props => (
    <div className={styles.dish}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h3 className={styles.name}>{props.name}</h3>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)
const Menu = ({ data }) => (
    <Layout>
        <SEO title="Vivas Cantina Brunch" />
        <Container>
            <h2>Brunch Menu</h2>
            <p>Come in to Vivas Cantina for the best Mexican-inspired brunch every Saturday and Sunday from 9am - 1pm.</p>
            <Dish
                name="Fajitas"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
                excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <Dish
                name="Casadilla"
                avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
                excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <div>

                <h2>Seasonal Menu</h2>
                <p>Our Menu is constantly changing to capture the best of authentic Mexican soul foods in every one of our traditional dish.</p>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link
                            to={node.fields.slug}
                            css={css`
                text-decoration: none;
                color: inherit;
              `}
                        >
                            <h3
                                css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
                            >
                                {node.frontmatter.title}{" "}
                                <span
                                    css={css`
                  color: #bbb;
                `}
                                >
                                    — {node.frontmatter.date}
                                </span>
                            </h3>
                            <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)
export default Menu

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`