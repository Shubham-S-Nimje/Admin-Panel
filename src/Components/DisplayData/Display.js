import React, { useContext } from 'react'
import AddtoCartbutton from '../ButtonData/AddtoCartbutton'
import ContextData from '../Context/ContextData'

const Display = () => {
    const {addproductdata} = useContext(ContextData)
  return (
    <div>
      <h1>Display</h1>
      {addproductdata.map((data) => {
        return (<p>{data.medicinename} - {data.medicinedesc} - Rs.{data.medicineprice} <AddtoCartbutton/></p>)
      })}
    </div>
  )
}

export default Display
