import React from 'react'
import Person from './Person';

function NameList() {

    // const persons =[{name:"jack",age:25},{name:"Dan",age:22},{name:"vicky",age:26},{name:"vicky",age:27}]
// use index when key not unique
    const names =['aa','bb','cc','cc']
    const personList = names.map((person,index)=><h2 key ={index} >person={index}{person}</h2>)

//    const personList = persons.map((person)=><Person key ={person.name} person={person}/>)
    // const names = ['a','b','c']
    // const nameList = names.map((name)=><h2>{name}</h2>)
  return (
    <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
        {/* {nameList} */}
        {personList}
    </div>
  )
}

export default NameList