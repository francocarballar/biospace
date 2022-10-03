import '../styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react'
import { Provider } from '../context'
import { NavBar } from '../components/NavBar'
import Head from 'next/head'

const theme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primary: '#360568',
      secondary: '#16EA16'
    },
    space: {},
    fonts: {}
  }
})

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider theme={theme}>
        <Provider>
          <Head>
            <link
              rel='icon'
              href='/icon/favicon.ico'
              onLoad="this.rel='stylesheet'"
            />
            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0'
            />
            <meta name='robots' content='index, follow' />
            <meta name='theme-color' content='#360568' />
            <title>Super Biobac</title>
          </Head>
          <NavBar />
          <Component {...pageProps} />
        </Provider>
      </NextUIProvider>
    </>
  )
}

export default MyApp
