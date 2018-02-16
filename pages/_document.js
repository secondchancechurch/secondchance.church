import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import { extractCritical } from 'emotion-server'

import reset from '../styles/reset'
import '../styles/base'

export default class MyDocument extends Document {
  static async getInitialProps({renderPage}) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return {...page, ...styles}
  }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Second Chance Church | A church for people who need a second chance.</title>

          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#f4802c" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <link href="https://fonts.googleapis.com/css?family=Raleway:400,600,700" rel="stylesheet" />

          <style dangerouslySetInnerHTML={{__html: reset }} />
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
  )
  }
}