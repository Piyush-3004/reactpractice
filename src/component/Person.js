import React from 'react'

function Person({person}) {
  return (
    <div>Person
        iam {person.name}. iam {person.age} years old.
    </div>
  )
}

export default Person