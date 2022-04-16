import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'

// added the below on first _app.tsx update:
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'
// added the above items on first _app.tsx update ^

// Added this additional line in the first _app.tsx update:
require('@solana/wallet-adapter-react-ui/styles.css')
// the above line was added ^

function MyApp({ Component, pageProps }: AppProps) {
  // Added the below constants during the first _app.tsx update.

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet

  // You can also provide a custom RPC endpoint.
  const endpoint = clusterApiUrl(network)

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter({ network }),
  ]

  return (
    // added ConnectionProvider, WalletProvider, and WalletmodalProvider (including closing tags)

    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* The above items were added. See the comment above them for more info. */}

          <Layout>
            <Head>
              <title> 🧁 Cupcake Crazy 🤪</title>
            </Head>
            <Component {...pageProps} />
          </Layout>

          {/* The below items were added as closing tags to the newly added items above. */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default MyApp
