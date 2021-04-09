import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import * as styles from "../components/menu-css-modules.module.css"

const Dish = props => (
  <div className={styles.dish}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h3 className={styles.name}>{props.name}</h3>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)
const Menu = () => (
  <Layout>
    <SEO title="Vivaz Cantina Brunch Menu" />
    <Container
      style={{
        marginTop: `2rem`,
      }}
    >
      <h2>Our Menu</h2>
      <p>
        Come in to Vivaz Cantina for the best Mexican-inspired brunch every
        Saturday and Sunday from 9am - 1pm.
      </p>
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
        <p>
          Our Menu is constantly changing to capture the best of authentic
          Mexican soul foods in every one of our traditional dish.
        </p>
      </div>
    </Container>
  </Layout>
)
export default Menu
