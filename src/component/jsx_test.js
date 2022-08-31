import React, { createElement } from 'react'

const Test = () => {

    //JSX Type
    // return (
    //     <div>
    //     <h1>Hello Piyush in jsx..........!!</h1>
    //     </div>
    // )

    // createEement( name of tag ,{ attributes in key:value pair } , content )
    return React.createElement('div',{id:'heading',className:'A'}, React.createElement('h1',null,"Hello this without using jsx"))
}

export default Test