import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import * as styles from "../components/about-css-modules.module.css"

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h3 className={styles.username}>{props.username}</h3>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
const aboutUs = () => (
  <Layout>
    <SEO title="About Us" />
    <Container
      style={{
        marginTop: `2rem`,
      }}
    >
      <h2>About Vivaz Cantina in New Haven, CT</h2>
      <p>
        Nunc ulvinar sapien et ligula ullamcorper malesuada proin. Sollicitudin
        nibh sit amet commodo nulla facilisi. Aliquam sem fringilla ut morbi
        tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada
        bibendum. Et tortor consequat id porta nibh venenatis cras. Elit sed
        vulputate mi sit amet. At ultrices mi tempus imperdiet. Dignissim diam
        quis enim lobortis scelerisque fermentum dui faucibus in. A pellentesque
        sit amet porttitor eget dolor morbi. Sollicitudin aliquam ultrices
        sagittis orci a. Eget gravida cum sociis natoque penatibus et magnis
        dis.
      </p>
      <User
        username="Bernard Lanche"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="David Klemen"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default aboutUs
