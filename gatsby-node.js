exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulEntry {
        nodes {
          ... on ContentfulMenu {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("Error loading courses", JSON.stringify(result.errors))
  }

  result.data.allContentfulEntry.nodes.forEach(item => {
    actions.createPage({
      path: `/${item.slug}/`,
      component: require.resolve("./src/templates/item-template.js"),
      context: {
        slug: item.slug,
      },
    })
  })
}
// exports.createSchemaCustomization = ({ actions }) => {
//   actions.printTypeDefinitions({ path: "./typeDefs.txt" })
// }
const { fmImagesToRelative } = require("gatsby-remark-relative-images-v2")

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node)
}
