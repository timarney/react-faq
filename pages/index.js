import React from "react";
import { Link } from "react-router";
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";

let d = require("pages/intro.md");

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <div dangerouslySetInnerHTML={{ __html: d.body }} />
      </div>
    );
  }
}
