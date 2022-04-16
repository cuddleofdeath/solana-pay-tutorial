// @ts-nocheck -- remove this if using in actual project, disables typechecking for this file since it's inside a folder where imports would be broken on the github. However, as long as this file is placed in the correct location in your project, it will work fine!

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title> 🧁 Cupcake Crazy 🤪</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
