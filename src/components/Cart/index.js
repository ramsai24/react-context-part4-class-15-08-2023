import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'

import './index.css'
import EmptyCartView from '../EmptyCartView'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartEmpty = cartList.length === 0

      return (
        <>
          <Header />
          {cartEmpty ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <CartListView />
              </div>
            </div>
          )}
          {/* {cartEmpty && <EmptyCartView />}(
          <div className="cart-container">
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              <CartListView />
            </div>
          </div>
          ) */}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
