import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"
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
    <SEO title="Vivaz Cantina | About" />
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
        <Col sm={12}>
          <h2>A Brief History of Vivaz Cantina</h2>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Nunc ulvinar sapien et ligula ullamcorper malesuada proin.
            Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit. Sapien nec
            sagittis aliquam malesuada bibendum. Et tortor consequat id porta
            nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi
            tempus imperdiet. Dignissim diam quis enim lobortis scelerisque
            fermentum dui faucibus in. A pellentesque sit amet porttitor eget
            dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget
            gravida cum sociis natoque penatibus et magnis dis.
          </p>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12} sm={6}>
          <User
            username="Bernard Lanche"
            avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
            excerpt="I'm Maria Randall. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </Col>
        <Col xs={12} sm={6}>
          <User
            username="David Klemen"
            avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
            excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default aboutUs
