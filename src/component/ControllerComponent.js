import React, { Component } from 'react'

export class ControllerComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'angular'
      }
    }
    //This Enables typing in input element , without this we cant write anything in input tag
    handleusernamechange=(event) =>{
        this.setState({username:event.target.value})

    }
    handelcommentschange = (event)=>{
        this.setState({comments:event.target.value})
    }
    handletopicchange = (event) =>{
        this.setState({topic:event.target.value})
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        // to keep the filled data after hitting submit button
        event.preventDefault()
    }
  render() {
// we can use only username in html tag value rather than this.state.username
    // const {username,comments,topic} = this.state
    return (
      <div>ControllerComponent
        <form onSubmit={this.handleSubmit}>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.handleusernamechange}/>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handelcommentschange} ></textarea>
            </div>
            <div>
                <label>Topics</label>
                <select value={this.state.topic} onChange={this.handletopicchange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                </select>
                <button >Submit</button>
            </div>
        </form>
      </div>
    )
  }
}

export default ControllerComponent