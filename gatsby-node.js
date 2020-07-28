const path = require(`path`)

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions
//   const typeDefs = `
//   query {
//     articleTitle
  


//   articleText {
//     id
    
  
//   }
//   slug
// }
// // `
//   createTypes(typeDefs)
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
    query {
      articleTitle
    


    articleText {
      id
      
    
    }
    slug
  }
`
).then(({ errors, data }) => {
  if (errors) {
    reject(errors)
  }

      if (data && data.article) {
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