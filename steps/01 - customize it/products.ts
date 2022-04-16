// This is a customized version of products.ts from Pointer.gg's tutorial for Solana Pay. I added a product and changed the other items around. I also updated the item descriptions.

export const products = [
  {
    id: 'cupcake-single',
    name: '🧁 Sample',
    description:
      'A tiny box containing 1 cupcake to sample. Your choice of flavor!',
    unitName: 'sample', // shows after the price, eg. 0.05 SOL/box
    priceSol: 0.02,
    priceUsd: 2,
  },
  {
    id: 'box-of-cupcakes',
    name: '📦 Box',
    description: 'A delicious box with various flavors of cupcakes',
    unitName: 'box', // shows after the price, eg. 0.05 SOL/box
    priceSol: 0.05,
    priceUsd: 5,
  },
  {
    id: 'basket-of-cupcakes',
    name: '🧺 Basket',
    description: 'A large basket full of an assortment of cupcakes',
    unitName: 'basket',
    priceSol: 0.1,
    priceUsd: 10,
  },
]
