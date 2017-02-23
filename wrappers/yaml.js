import React from 'react'
import yaml from 'js-yaml'
import Helmet from 'react-helmet'
import { config } from 'config'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const data = this.props.route.page.data
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | ${data.title}`} 
        />
        <h1>{data.title}</h1>
        <p>Raw view of yaml file</p>
        <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(data) }} />
      </div>
    )
  },
})
