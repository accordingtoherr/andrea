import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import PropTypes, { checkPropTypes } from "prop-types"
import React from "react"

const Card = props => {
  const { name, slug, articleTitle, articleMedia } = props
console.log(props);

  return (
    <div className="bg-white h-full shadow-sm rounded-md overflow-hidden group">
      <Link to={`/${slug}`}>
         <div className="group-hover:opacity-75 transition duration-150 ease-in-out"> 
        {props.articleMedia && <Img fluid={props.articleMedia.localFile.childImageSharp.fluid} alt={name} />}
        {/* {props.articleMedia && <img src={`https:${props.articleMedia.file.url}`}></img> */}
        </div> 
        <div className="p-4 sm:p-5">
          <h2 className="sm:text-lg text-gray-900 font-semibold">{props.articleTitle}</h2>
          {/* <p className="text-sm sm:text-base text-gray-700">words</p> */}
            {/* {props.localFile ? <Img fluid={props.localFile.childImageSharp.fluid} alt={name} /> : <img src="default image" />} */}

        </div>
        {/* <div className="group-hover:opacity-75 transition duration-150 ease-in-out">
          {props.localFile && <Img fluid={props.localFile.childImageSharp.fluid} alt={name} />}
        </div> */}
      </Link>
    </div>

  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    localFile: PropTypes.object,
  }),
}

export default Card

export const query = graphql`


  fragment ContentfulFragment on ContentfulArticle {
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


