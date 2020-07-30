import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Card from "../components/Cards"
import Carousel from "../components/Carousel"


import Layout from "../layouts/Layout"
//  const obj = JSON.parse();
const {useContext, useState, createContext} = React


// export const MyProvider = MyContext.Provider
// export const MyConsumer = MyContext.Consumer
// // const path = require(`path`);
// export default MyContext;


// const Template = props => {
//   const { articleTitle, articleMedia } = props

//  export default props => {


  const AppContext = createContext()
  
  // const {
    
      
  //   articleMedia,
  //   slug,
   
  //  } = props.node


  function AppProvider(props) {
    const [count, setCount] = useState(0)
    const value = { count, setCount }
    return (
      <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>
    )
=

  
  console.log(props);
  return (
    
    <Layout>
     
      {/* /* <SiteMetadata
        title={props.node.articleTitle}
        
      
      /> */}
      {/* <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
             <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].props.node.articleMedia.localFile.childImageSharp.fluid}
                  alt={name}
                />
              )} */}
              {/* {gallery && gallery.length > 1 && <Carousel images={gallery} />} */}
            {/* </div>  */}
   
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
                {props.pathContext.node.articleTitle}
              </h1>

            <p>
                {props.pathContext.node.articleText}
              </p> 


              {/* <p className="my-4 text-base text-gray-700 whitespace-pre-line">{props.data.articleText}</p> */}

              {/* <Img fluid={props.articleMedia.localFile.childImageSharp.fluid} />  */}


{/*              
               <div className="my-4 text-base text-gray-700 whitespace-pre-line">
                   <p>{props.pathContext.node.articleText.JSON.parse(str)}</p>
                 </div> 

      //  <Img fluid={props.articleMedia.localFile.childImageSharp.fluid} alt={name} /> 

             
              {/* {url && (
                <div className="mt-8">
                  <Button href={url}>More info</Button>
                </div>
              )} *}

              {/*</Layout><p>{props.articleText}</p>
            </div>
          </div>
        </div>
      </div>
      {related && (
        <div className="bg-gray-100 py-12 lg:py-16">
          {/* <div className="container">
            <h2 className="text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 mb-8">
              You may also like
            </h2>
          </div> */}
          {/*<Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )} */}
     
    </Layout>
  
  )
}

export const query = graphql`
  fragment MyContentfulFragment on ContentfulArticle {
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

