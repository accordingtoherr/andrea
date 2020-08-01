import React from "react"
import Layout from "../layouts/Layout"


export default function ArticleItem({ pageContext }) {
  const article = pageContext.node;
  console.log(article)

  //so i can see what is happening/
  return (

    <Layout>
      <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
        {article.articleTitle}
      </h1>

      <p>
        {article.articleText.json.content.data.content.map(element => {
            
            if (element.nodeType === 'paragraph') {
              return (
              
                <p>{
                 
                  element.content.data.nodeType.map(content => {
                    if (content.nodeType !== 'text') {
                      return (<span><em>{content.data.value}</em></span>);
                    }
                    // return (content.value);
                  })
                }</p>
              );
            }
      
          
          })
        }
      </p>
    </Layout>
  )
}