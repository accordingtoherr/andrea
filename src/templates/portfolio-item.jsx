import React from "react"
import Layout from "../layouts/Layout"
import "../styles/style.css"



function render(node) {
  console.log(node)
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
    return (<p className="para">{render(node.content)}</p>);
  }


  if (node.nodeType === 'list-item') {
    return (<ol>{render(node.content)}</ol>)
  }

  if (node.nodeType === 'list-item') {
    return (<ol>{render(node.content)}</ol>)
  }



   if (node.nodeType === 'unordered-list') {
    return (<ul>{render(node.content)}</ul>)
  }

  if (node.nodeType === 'unordered-listheading-2') {
    return (<ul>{render(node.content)}</ul>)
  }

  if (node.nodeType === 'heading-2') {
    return (<h2>{render(node.content)}</h2>)
  }

  
  if (node.nodeType === 'hyperlink') {
    return (<a>{render(node.content)}</a>)
  }

  if (node.nodeType === 'hr') {
    return (<a>{render(node.content)}</a>)
  }
  if (node.nodeType === 'url') {
    return (<a>{render(node.content)}</a>)
  }


  
  if (node.nodeType === 'ordered-list') {
    return (<a>{render(node.content)}</a>)
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


<div className="mt-4 leading-loose container py-12 lg:pb-16 flex flex-wrap space-x-3 ">
  {/* <h1>{render(article.articleTitle.json)}</h1> */}
  <div className="articletext">{render(article.articleText.json)}</div>
</div>
     
    </Layout>
  )
}

////////////











// export default function ArticeItem({ pageContext}) {
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