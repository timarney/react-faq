import React from "react";
import Link from "gatsby-link";
import "../css/markdown-styles.css";
import Helmet from "react-helmet";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        {posts ? posts.map(post => {
          if (
            post.node.path !== "/404/" &&
            post.node.frontmatter.path === "/intro/"
          ) {
            const title = post.node.frontmatter.title || post.node.path;

            console.log(post.node.frontmatter.path);
            return (
              <div className="markdown" key={post.node.frontmatter.path}>
                <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
              </div>
            );
          }
        }) : <div>:(</div>}
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          html
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
