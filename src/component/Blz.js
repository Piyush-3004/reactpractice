import React from 'react'

function Blz() {
  return (
    <div>
            <h1>BridgeLabz is Cool</h1>
    <img src={require("./Nature.jpg")} alt="cantload" width="20%" />
    <p>At BridgeLabz, we are a techie community of</p>
    <ul>
        <li>technologies</li>
        <li>thinkers</li>
        <li>builders</li>
    </ul>
    <p>Working together to keep the Tech Employability of Engineers alive and accessible, 
        so Tech Companies worldwide can get contributors and creators for Technology Solutions.
        We believe this act of human collaboration across an employability platform is essential 
        to individual growth and our collective future</p>
    <p>To Know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a> to learn even more about our mission i.e <strong>Employability to all</strong>.</p>
    </div>
  )
}

export default Blz