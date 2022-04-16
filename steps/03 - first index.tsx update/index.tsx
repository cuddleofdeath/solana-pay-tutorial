// @ts-nocheck -- remove this if using in actual project, disables typechecking for this file since it's inside a folder where imports would be broken on the github. However, as long as this file is placed in the correct location in your project, it will work fine!

// This is the first update to the index.tsx page.

//Note: (first index update) Imported useWallet and WalletMultiButton below
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
//Note: (first index update) Imported useWallet and WalletMultiButton above

import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {
  // We added a public key of the connected wallet below, if there is one
  const { publicKey } = useWallet()
  // the above publicKey const was added during the first index.tsx update.

  return (
    <div className="m-auto flex max-w-4xl flex-col items-stretch gap-8 pt-24">
      <SiteHeading>Cupcake Crazy </SiteHeading>

      {/* We add the Solana wallet connect button below (added on first index.tsx update) */}
      <div className="basis-1/4">
        <WalletMultiButton className="!bg-gray-900 hover:scale-105" />
      </div>
      {/* We add the Solana wallet connect button above (added on first index.tsx update) */}
      {/* 
    We change the enabled for products from true to publicKey !== null, this disables checking out without a connected wallet. */}
      <Products submitTarget="/checkout" enabled={publicKey !== null} />
    </div>
  )
}
