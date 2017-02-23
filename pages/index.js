import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Hi people
        </h1>
        <h3>Supported file types</h3>
        <ul>
          <li>
            <Link to={prefixLink('/markdown/')}>Markdown</Link>
          </li>
        </ul>
          
      
      </div>
    )
  }
}
