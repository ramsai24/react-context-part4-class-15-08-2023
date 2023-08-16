import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  removeAll: () => {},
})

export default CartContext
