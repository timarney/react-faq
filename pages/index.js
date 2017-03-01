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
            { name: "description", content: "Quality content about React core concepts into a central location for quick reference" },
            { name: "keywords", content: "React, FAQ" }
          ]}
        />
        <div dangerouslySetInnerHTML={{ __html: d.body }} />
      </div>
    );
  }
}
