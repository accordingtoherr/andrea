const path = require(`path`);

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
// //   const typeDefs = `
// /    type contentfulPortfolioDescriptionTextNode implements Node {
//   description: String
// }
// type ContentfulPortfolio implements Node {
//   description: contentfulPortfolioDescriptionTextNode
//   gallery: [ContentfulAsset]
//   id: ID!
//   name: String!
//   related: [ContentfulPortfolio]
//   slug: String!
//   summary: String!
//   thumbnail: ContentfulAsset
//   url: String
// }
// `
//   createTypes(typeDefs)
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
     {theArticle: allContentfulArticle {
      edges {
        node {
      articleTitle
      articleText {
        id
      }
      slug
    }}
  }}
`
).then(({ errors, data }) => {
 
  if (errors) {
   
    reject(errors)
  }
console.log("test",data.theArticle.edges)
      if (data && data.theArticle && data.theArticle.edges) {
        const component = path.resolve("./src/templates/portfolio-item.jsx")
       
        data.theArticle.edges.map(({ node }) => {
          createPage({
            path: `/article/${node.slug}`,
            component,
            context: { node},
          })
        })
      }

      resolve()
    })
  })
}