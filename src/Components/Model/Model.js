import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return <div/>
}

const Overlay = (props) => {
    return <div>
        {props.children}
    </div>
}

const portal = document.getElementById('overlay')
const Model = (props) => {
    
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop />, portal)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, portal)}
      
    </Fragment>
  )
}

export default Model
