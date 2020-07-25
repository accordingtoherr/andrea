const path = require(`path`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//     type contentfulPortfolioDescriptionTextNode implements Node {
//       description: String
//     }
//     type ContentfulPortfolio implements Node {
//       description: contentfulPortfolioDescriptionTextNode
//       gallery: [ContentfulAsset]
//       id: ID!
//       name: String!
//       related: [ContentfulPortfolio]
//       slug: String!
//       summary: String!
//       thumbnail: ContentfulAsset
//       url: String
//     }
//     `
//     createTypes(typeDefs)
//   }


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
      `
    {
    allContentfulArticle {
        edges{
        node {,
        }
      }
    }
  `
  )

  console.log('WE CAUGHT THE CONTENTFUL PAGE', result)


    
    // return new Promise((resolve, reject) => {
      // graphql(`
      //   {
      //   allContentfulArticle {
      //       nodes {
      //        edges?
      //       }
      //     }
      //   }
      
    
    
    
  //   ).then(({ errors, data }) => {
  //     if (errors) {
      
  //       reject(errors)
  //     }
  //     console.log('HERES DATA 1:', data)

  //     if (data && data.portfolio) {
  //       const component = path.resolve("./src/templates/portfolio-item.jsx")
  //       data.portfolio.nodes.map(({ slug }) => {
  //         createPage({
            // path: 
  //           component,
  //           context: { slug },
  //         })
  //       })
  //     }

  //     resolve()
  //   })
  // })
// }

  }
