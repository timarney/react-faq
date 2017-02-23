import React from 'react'
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
        <p>Raw view of json file</p>
        <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
      </div>
    )
  },
})
