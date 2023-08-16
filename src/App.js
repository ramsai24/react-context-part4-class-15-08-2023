import {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import QuantityContext from './context/QuantityContext'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
    quantity: 1,
  }

  addCartItem = product => {
    const {cartList} = this.state

    const check = cartList.every(each => each.id !== product.id)
    console.log(check)

    if (check) {
      this.setState(prevState => ({
        cartList: [...prevState.cartList, product],
        quantity: 1,
      }))
    }
  }

  deleteCartItem = id => {
    const {cartList} = this.state

    const filteredList = cartList.filter(remove => remove.id !== id)
    this.setState({cartList: filteredList})
  }

  decrementQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  incrementQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  render() {
    const {cartList, quantity} = this.state

    return (
      <BrowserRouter>
        <QuantityContext.Provider
          value={{
            quantity,
            decrementQuantity: this.decrementQuantity,
            incrementQuantity: this.incrementQuantity,
          }}
        >
          <CartContext.Provider
            value={{
              cartList,
              addCartItem: this.addCartItem,
              deleteCartItem: this.deleteCartItem,
            }}
          >
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/products" component={Products} />
              <ProtectedRoute
                exact
                path="/products/:id"
                component={ProductItemDetails}
              />
              <ProtectedRoute exact path="/cart" component={Cart} />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="not-found" />
            </Switch>
          </CartContext.Provider>
        </QuantityContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
