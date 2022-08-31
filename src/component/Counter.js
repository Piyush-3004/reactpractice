import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count: 0
    }
  }

  increment(){
    //we use CallBackFunction here to make synchronised calls to state
    // without CBF increment will be done after click event
//    this.setState( {count:this.state.count+=1},()=> {console.log('value',this.state.count) })
    // This Doesnt Work in UI Because here , we are changing state without setState() Method
    // This.state.count+=1
    
    //When we want to changw State based on previous state, pass the function as argument instead of an object
    this.setState((prevCount,props)=> ({ count:prevCount.count + props.value }))
    console.log(this.state.count)
    
  }

  incrementfive(){
    this.increment()
    // this.increment()
    // this.increment()
    // this.increment()
    // this.increment()

  }

  render() {
    return (
      <div>
      <div>Counter  - {this.state.count}</div>
      <button onClick={() => this.incrementfive()}>Increment</button>
      </div>
    )
  }
}

export default Counter