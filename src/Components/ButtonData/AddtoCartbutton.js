import React, { useContext, useState } from 'react'
import ContextData from '../Context/ContextData'

const AddtoCartbutton = () => {
    const [addcartamount, Setaddcartamount] = useState(1)
    const {totalcartamount} = useContext(ContextData)

    const addtocartamountchange = (event) => {
        Setaddcartamount(event.target.value)
    }

    const addtocart = () => {
        totalcartamount(addcartamount)
    }

  return (
    <section>
        <input type='number' value={addcartamount} onChange={addtocartamountchange} />
        <button onClick={addtocart}>Add to cart</button>
    </section>
  )
}

export default AddtoCartbutton
