import React from 'react'

function Child(props) {
  return (
    <div>Child
        <button onClick={()=>props.greetHandler("Child")}>GreetParent</button>
    </div>
  )
}

export default Child