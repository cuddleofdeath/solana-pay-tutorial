// @ts-nocheck -- remove this if using in actual project, disables typechecking for this file since it's inside a folder where imports would be broken on the github. However, as long as this file is placed in the correct location in your project, it will work fine!

// Note: This is the original index.tsx of the Cupcake Crazy repo.

import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'

export default function HomePage() {
  return (
    <div className="m-auto flex max-w-4xl flex-col items-stretch gap-8 pt-24">
      <SiteHeading>Cupcake Crazy </SiteHeading>

      <Products submitTarget="/checkout" enabled={true} />
    </div>
  )
}
