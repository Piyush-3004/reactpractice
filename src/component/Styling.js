import React from 'react'
import './stylesheet.css'

function Styling(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>Styling
        <h1 className={` ${className} bg `}>StyleSheet</h1>
    </div>
  )
}

export default Styling