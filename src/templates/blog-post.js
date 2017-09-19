import React from "react";
import Helmet from "react-helmet";
import "../css/markdown-styles.css";
import Link from "gatsby-link";
import { rhythm, scale } from "../utils/typography";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    let siteTitle = this.props.data.site.siteMetadata.title;
    let title = post.frontmatter.title;
    if (typeof siteTitle !== "undefined") {
      title += ` | ${siteTitle}`;
    }

    return (
      <div className="markdown">
        <Helmet title={`${title} `} />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
