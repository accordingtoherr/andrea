import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"

import SiteMetadata from "../components/SiteMetadata"



 const IndexPage = ({ data }) => {
   console.log(data.articles)
   return (
     <Layout>
       <SiteMetadata title="Home" description="Portfolio of Andrea Richards" />

       <Hero />

        <div className="bg-gray-100 py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">Portfolio</div>
        )}
      </div>
      
    
     </Layout>
  )
}

export default IndexPage




export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulArticle {
      nodes {
        ...ContentfulFragment
      }
    }
  }
`




// export const query = graphql`
// {
// articles: allContentfulArticle {
//   edges {
//     node {
//       articleTitle
//       articleText {
//         id
//       }
//       articleMedia {
//         id
//       }
//     }
//   }
// }
// // }    
// `