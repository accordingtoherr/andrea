import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../layouts/Layout"

import SiteMetadata from "../components/SiteMetadata"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />

    <div className="bg-gray-100">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About me
            </h1>

            <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
           Marketing, Writing, Content Management
            </h2>
            <div className="mt-4 leading-loose">
            Marketing and communications pro with a passion for storytelling. Proven ability to lead brand messaging, collaborate across teams, grow brand awareness, and run successful campaigns. 
          
              <br />
              I'm happy to hear from you:
              <br />
              <a
                href="mailto:andrearichard954@gmail.com"
                className="border-b border-gray-500 hover:border-blue-600 hover:text-blue-600"
              >
                andrearichard954@gmail.com
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 md:pl-12">
            <Img
              fluid={data.author.childImageSharp.fluid}
              alt="Andrea"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
 
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    author: file(relativePath: { eq: "author.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
