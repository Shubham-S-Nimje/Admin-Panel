import React, { useState } from 'react'
import ContextData from './ContextData'

const ContextProvider = (props) => {
    const [addproductdata, Setaddproductdata] = useState([])
    const [cartamount, Setcartamount] = useState(1)

const addProduct = (newmedicinename, newmedicinedesc, newmedicineprice) => {
Setaddproductdata((newdata) => {
    return [...newdata,{
        medicinename:newmedicinename,
        medicinedesc:newmedicinedesc,
        medicineprice:newmedicineprice
    }]
})
}

const totalcartamount = (newmamount) => {
    const totalamount = cartamount + newmamount
    Setcartamount(totalamount)
    }
    console.log(cartamount)

  return (
    <ContextData.Provider value={{addproductdata,addProduct,totalcartamount,cartamount}}>
        {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
