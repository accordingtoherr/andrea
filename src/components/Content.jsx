// import React from 'react'
// import {Link, graphql, useStaticQuery} from 'gatsby'
// import Img from "gatsby-image"

// import Swiper from "react-id-swiper"

// import "swiper/css/swiper.css"
// import "./Carousel.css"

// const Article = () => {

//     const data = useStaticQuery(graphql`
//     query{
//       allContentfulArticle(
//         sort: {
//           ContentfulArticleFieldsEnum:
//         edges{
//           node{
//             title
//             slug
//             ContentfulArticleFieldsEnum(formatString:"D.M.YYYY")
//             thumbnail {
//               fluid {
//                 src
//               }
//               description
//             }
//           }
//         }
//       }
//     }
//     `)
    
//     return(
//         <div class="featured-lista">
//             {data.allContentfulSuljin.edges.map((edge) => {
//             return(
//                 <article class="featured-artikkeli">
//                   <Link to={`/${edge.node.slug}`}>
//                      <div class="pieni-thumbnail"><img src={`${edge.node.thumbnail.fluid.src}`} alt={`${edge.node.thumbnail.description}`}/></div>
//                      <h2>{edge.node.title}</h2>
//                      <p>{edge.node.published}</p>
//                   </Link>
//                 </article>
//             )
//             })}
//       </div>
//     )
// }

// export default Article