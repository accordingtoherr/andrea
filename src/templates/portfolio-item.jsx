import React from "react"
import Layout from "../layouts/Layout"
import "../styles/style.css"



function render(node) {
  // If this is an array of nodes, render each one individually
  if (Array.isArray(node)) {
    // Render every node within the array
    return node.map(render);
  }

  // This is the top level node; `article.articleText.json` should ALWAYS be a "document". 
  if (node.nodeType === 'document') {
    return render(node.content);
  }

  // If the node is a paragraph, create a paragraph element then render the contents. 
  if (node.nodeType === 'paragraph') {
    return (<p>{render(node.content)}</p>);
  }

  // Text nodes can't contain anything else, just render the inner value. 
  if (node.nodeType === 'text') {
    return (node.value);
  }

  return (<strong>{node.nodeType}</strong>);
}


export default function ArticleItem({ pageContext }) {
  const article = pageContext.node;
  console.log(article)

  //so i can see what is happening/
  return (

    <Layout>
        <div className="container py-12 lg:pb-16">
          





      <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
        {article.articleTitle}
      </h1>

      
        <div className="flex flex-wrap">
        <p className="articletext">{render(article.articleText.json)}</p>
      </div>
      </div>
     
    </Layout>
  )
}

////////////











// export default function ArticleItem({ pageContext}) {
//   const article = pageContext.node;
//   console.log(article)

//   //so i can see what is happening/
//   return (

//     <Layout>
//       <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1">
//         {article.articleTitle}
//       </h1>

//       <div>
//         {article.articleText.json.content.map(element => {
            
//             if (element.nodeType === 'paragraph') {
//               return (
              
//                 <p>{
                 
//                   element.content.map(content => {
//                     if (content.nodeType !== 'text') {
//                       return (<span><em>{content.value}</em></span>);
//                     }
//                     // return (content.value);
//                   })
//                 }</p>
//               );
//             }
      
          
//           })
//         }
//       </div>
//     </Layout>
//   )
// }