import Head from 'next/head'

export const SEO = (props) =>
    <Head>
      {/* Page Title */}
      <title>{props.title} | Second Chance Church</title>
      <meta itemProp="name" content={`${props.title} | Second Chance Church`} />
      <meta property="og:title" content={`${props.title} | Second Chance Church`} />

      {/* Page Description */}
      <meta name="description" content={props.description} />
      <meta itemProp="description" content={props.description} />
      <meta property="og:description" content={props.description} />

      {/* Image(s) */}
      <meta itemProp="image" content={props.image} />
      <meta property="og:image" content={props.image} />

      {/* Twitter Specific */}
      <meta name="twitter:title" content={`${props.title} | ${props.site}`} />
      <meta name="twitter:description" content={props.description} />
      {props.image &&
      <meta name="twitter:card" content="summary_large_image" />
      }
      {props.image &&
      <meta name="twitter:image:src" content={props.image} />
      }
    </Head>