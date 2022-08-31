import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Clicked")
    }
  return (
    <div>FunctionClick
        {/* no function call here , as this is event handler*/}
        <button onClick={clickHandler} >Click</button>
    </div>
  )
}

export default FunctionClick