import React from 'react'
import Helmet from 'react-helmet'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string,
    }
  },
  render () {
    const head = Helmet.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
