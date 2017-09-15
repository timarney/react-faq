import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import "../css/markdown-styles.css";
import Helmet from "react-helmet";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        {posts.map(post => {
          if (
            post.node.path !== "/404/" &&
            post.node.frontmatter.path === "/intro/"
          ) {
            const title = get(post, "node.frontmatter.title") || post.node.path;
            return (
              <div className="markdown" key={post.node.frontmatter.path}>
                <p dangerouslySetInnerHTML={{ __html: post.node.html }} />
              </div>
            );
          }
        })}
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object
};

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
