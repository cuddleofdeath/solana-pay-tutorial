// @ts-nocheck -- remove this if using in actual project, disables typechecking for this file since it's inside a folder where imports would be broken on the github. However, as long as this file is placed in the correct location in your project, it will work fine!

import BigNumber from 'bignumber.js'
import { ParsedUrlQuery } from 'querystring'
import { products } from './products'

export default function calculatePrice(query: ParsedUrlQuery): BigNumber {
  let amount = new BigNumber(0)
  for (let [id, quantity] of Object.entries(query)) {
    const product = products.find((p) => p.id === id)
    if (!product) continue

    const price = product.priceUsd
    const productQuantity = new BigNumber(quantity as string)
    amount = amount.plus(productQuantity.multipliedBy(price))
  }

  return amount
}
