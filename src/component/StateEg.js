import react , { Component } from 'react'

class StateEg extends Component{

    constructor(){
        super()
        this.state={
            stMesssage:"thisIsAState"
        }
    }
    changeMessaage(){
        this.setState({
            stMesssage:"button cllicked..!!!!"
        })
    }

    render(){
        return (
            <div>
            <h1>This is state Eg {this.state.stMesssage}</h1>
            <button onClick={()=>this.changeMessaage()}>Click</button>
            </div>
            )
    }
}
export default StateEg