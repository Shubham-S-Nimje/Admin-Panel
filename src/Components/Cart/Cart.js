import React, { useContext } from 'react'
import ContextData from '../Context/ContextData'

const Cart = () => {
    const {cartamount} = useContext(ContextData)

    const opencarthandler = () => {
        console.log('egk')
    }
  return (
    <div>
      <h1>Cart ({cartamount})</h1>
      <button onclick={opencarthandler}>View Cart</button>
    </div>
  )
}

export default Cart
