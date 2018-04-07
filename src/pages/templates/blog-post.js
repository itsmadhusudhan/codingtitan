
import React from "react";
// import g from "glamorous";

// import { rhythm } from "../utils/typography";

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 display={"inline-block"} borderBottom={"1px solid"}>
       <a href="/"> Amazing Pandas Eating Things</a>
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          
            {node.frontmatter.title}{" "}
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;