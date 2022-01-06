require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.URL || `https://www.vivaznewhaven.com`
module.exports = {
  siteMetadata: {
    title: `Vivaz Cantina | Gourmet Mexican in New Haven, CT`,
    description: `Mexican food from the heart.`,
    author: `@thecaffeineteam`,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          allSitePage(filter: {isCreatedByStatefulCreatePages: {in: true}}) {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allSitePage },
        }) => {
          const sitePageNodeMap = allSitePage.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allSitePage.map(page => {
            return { ...page, ...sitePageNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_TRACKING_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/slides/menu-bg-slides`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // wherever background images are stored
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Zilla Slab\:700`,
          `Josefin Sans\:600, 600i, 700, 700i`,
          `Noto Sans JP\:300,500,700, 900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/vivaz-sun-image.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images-v2 must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2560,
            },
          },
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
