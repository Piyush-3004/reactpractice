import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'hiee..!!'

        }
        this.clickHandler=this.clickHandler.bind(this)
    }

      clickHandler() {
       this.setState({msg:'Bye'})
        console.log(this)
      }

      clickHandler = ()=>{this.setState({msg:"Bye..!!"})}
  render() {
    return (
      <div>{this.state.msg}
      {/* bind in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      
        {/* bind using arrow function */}
         {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

        {/* binding in constructor */}
         {/* <button onClick={this.clickHandler}>Click</button> */}
         
        {/* bind with using arrow fufnction as class property */}
         <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind