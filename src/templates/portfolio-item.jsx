import React from "react"
import Layout from "../layouts/Layout"
export default function ArticleItem({ pageContext }) {
  const article = pageContext.node;

  return (

    <Layout>
      <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
        {article.articleTitle}
      </h1>

      <p>
        {
          // Iterate over the array of content items within the `articleText` node
          article.articleText.json.content.map(element => {
            // Each `content` item has an associated `nodeType`, which is basically just an HTML element. 
            // So, add a case for each node type to render it properly.
            if (element.nodeType === 'paragraph') {
              return (
                <p>{
                  // Each content element can have its OWN array of child `content` items, 
                  // so we again need to handle each nodeType. 
                  //
                  // Rather than nesting these, it would probably be best to create a recursive "render" function
                  // so that you don't need to manually define this handler for each parent `nodeType`. 
                  element.content.map(content => {
                    if (content.nodeType !== 'text') {
                      return (<span>Unknown content type <em>{content.nodeType}</em></span>);
                    }
                    return (content.value);
                  })
                }</p>
              );
            }
            // @TODO Add cases for other `nodeType`s. 
            else {
              return (<><strong>Unknown nodeType <em>{element.nodeType}</em></strong><br /></>);
            }
          })
        }
      </p>
    </Layout>
  )
}