import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
