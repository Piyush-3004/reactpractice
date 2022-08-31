import React, { Component } from 'react'

class Ifelse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
  render() {

    //short circuit approach
    return this.state.isLoggedIn && <div>loggedIn..!!</div>

    //ternary conditional approach
    // return(
    //     this.state.isLoggedIn ? <div>loggedin</div>:<div>Not loggedin</div>
    // )

    // Element Variable Approach
    // let msg
    // if(this.state.isLoggedIn){
    //     msg=<div>Logged In</div>
    // }else {
    //     msg=<div>Not Logged In</div>
    // }
    // return <div>{msg}</div>

    // if(this.state.isLoggedIn){
    //     return(<div>Welcome , you are logged in </div>)
    // }else
    //     return(<div>Not Logged In</div>)


        // return (
    //     <div>
    //   <div>LoggedIn
    //     <div>not Loggedin</div>
    //   </div>
    //   </div>
    // )
  }
}

export default Ifelse