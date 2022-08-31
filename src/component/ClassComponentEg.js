import react , { Component } from 'react'

class ClassComponentEg extends Component{
    // render(){
    //     return <h1>Class Component{this.props.name}</h1>
    // }

    //Destruct props
    // we can use only username in {html} tag value rather than this.state.username
    render(){
        const {name}= this.props
        return <h1>Class Component  {name}</h1>
    }
}
export default ClassComponentEg
