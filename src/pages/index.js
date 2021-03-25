import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Container>
            <h1>Welcome to Vivas Cantina, the most authentic Mexican gourmet in New Haven!</h1>
            <p>Turpis nunc eget lorem dolor. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Sit amet porttitor eget dolor morbi non. Massa sed elementum tempus egestas sed sed. Diam vel quam elementum pulvinar etiam. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Eget velit aliquet sagittis id.</p>
            <p>Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sollicitudin nibh sit amet commodo nulla facilisi. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Sapien nec sagittis aliquam malesuada bibendum. Et tortor consequat id porta nibh venenatis cras. Elit sed vulputate mi sit amet. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. A pellentesque sit amet porttitor eget dolor morbi. Sollicitudin aliquam ultrices sagittis orci a. Eget gravida cum sociis natoque penatibus et magnis dis.</p>
        </Container>
        <p>
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
    </Layout>
)

export default IndexPage
