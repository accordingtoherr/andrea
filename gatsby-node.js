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


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions




  return new Promise((resolve, reject) => {
    graphql(`
    
      
      ContentfulArticle {
        
          ...SiteInformation
        }
      
    
  
  
  }  `
    
    
    
    ).then(({ errors, data }) => {
      if (errors) {
      
        reject(errors)
      }
      console.log('HERES DATA 1:', data)

      if (data && data.portfolio) {
        const component = path.resolve("./src/templates/portfolio-item.jsx")
        data.portfolio.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }

      resolve()
    })
  })
}


