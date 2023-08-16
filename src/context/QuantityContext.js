import React from 'react'

const QuantityContext = React.createContext({
  quantity: 1,
  decrementQuantity: () => {},

  incrementQuantity: () => {},
})
export default QuantityContext
