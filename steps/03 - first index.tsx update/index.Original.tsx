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
