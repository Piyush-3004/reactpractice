import React from 'react'

// function Greet(){
//     return <h1>Hello Piyush..........!!</h1>
// }

//Functional Component using Arrow Function
// const Greet = () => <h1>Hello Piyush..........!!</h1>
// export default Greet

// export default allows to import component wity any name in index.js
//export default Greet

// this is NameExport and needs to be imported with same name
//export const Greet = () => <h1>Hello Piyush..........!!</h1>

// implementing props
// const Greet = (props) => {
//     console.log(props)
//     return (
//         // We Can return only one element
//         <div>
//         <h1>Hello {props.name}.........!!</h1>
//         {props.children}
//         </div>
//         )
// }

// **Destruct props
// const Greet = ({name}) => {
// //    console.log(props)
//     return (
//         // We Can return only one element
//         <div>
//         <h1>Hello {name}.........!!</h1>
//         {/* {props.children} */}
//         </div>
//         )
// }
// Another Way
const Greet = props => {
    //    console.log(props)
    const {name}=props
            return (
            // We Can return only one element
            <div>
            <h1>Hello {name}.........!!</h1>
            {/* {props.children} */}
            </div>
            )
    }


export default Greet