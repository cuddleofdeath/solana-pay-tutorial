// @ts-nocheck -- remove this if using in actual project, disables typechecking for this file since it's inside a folder where imports would be broken on the github. However, as long as this file is placed in the correct location in your project, it will work fine!

import { useRouter } from 'next/router'
import { useMemo } from 'react'
import BackLink from '../../components/BackLink'
import PageHeading from '../../components/PageHeading'
import calculatePrice from '../../lib/calculatePrice'

export default function Checkout() {
  const router = useRouter()

  const amount = useMemo(() => calculatePrice(router.query), [router.query])

  return (
    <div className="flex flex-col items-center gap-8">
      <BackLink href="/shop">Cancel</BackLink>
      <PageHeading>Checkout ${amount.toString()}</PageHeading>
    </div>
  )
}
