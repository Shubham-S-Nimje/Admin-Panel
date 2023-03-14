import React, { useContext, useState } from 'react'
import ContextData from '../Context/ContextData'

const Form = () => {
    const [medicinename, Setmedicinename] = useState('')
    const [medicinedesc, Setmedicinedesc] = useState('')
    const [medicineprice, Setmedicineprice] = useState('')

    const {addProduct} = useContext(ContextData);

    const medicinenamechangehandler = (event) => {
        Setmedicinename(event.target.value)
    }
    const medicinedesvchangehandler = (event) => {
        Setmedicinedesc(event.target.value)
    }
    const medicinepricechangehandler = (event) => {
        Setmedicineprice(event.target.value)
    }
    const productaddhandler = () => {
        console.log(medicinename)
        console.log(medicinedesc)
        console.log(medicineprice)

        addProduct(medicinename,
            medicinedesc,
            medicineprice
            )
    }

  return (
    <div>
      <h1>Form</h1>
      <label>Medicine Name : </label>
      <input type='text' 
      value={medicinename}
      onChange={medicinenamechangehandler}/> <br/>
      <label>Medicine Describtion : </label>
      <input type='text' value={medicinedesc}
      onChange={medicinedesvchangehandler}/> <br/>
      <label>Medicine Price : </label>
      <input type='number' value={medicineprice}
      onChange={medicinepricechangehandler}/> <br/>
      <button onClick={productaddhandler}>Add Product</button>
    </div>
  )
}

export default Form
