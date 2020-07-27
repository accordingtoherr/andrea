const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type contentfulArticleDescriptionTextNode implements Node {
      description: String
   
    
      id: ID!
      name: String!
      slug: String!
      summary: String!
      thumbnail: ContentfulAsset
      url: String
    }
  `
  createTypes(typeDefs)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    query {
      articleTitle
    


    articleText {
      id
      
      
    }
    articleMedia {
        file{
          url
        }
        localFile {
          childImageSharp {
            fluid(maxWidth: 444, maxHeight: 342, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          
        }
      }
    }
  }
`
    .then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.portfolio) {
        const component = path.resolve("./src/templates/portfolio-item.jsx")
        data.article.nodes.map(({ slug }) => {
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