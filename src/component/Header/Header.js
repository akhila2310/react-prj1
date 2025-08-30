import React from 'react'
import './Header.css'

function Header() {
    let navitems=[{id:1,
        name:"about",
        value:'/about'},{id:2,name:"work",value:'/work'
        },{id:3,name:"contact",value:'/contact'},
    ]
  return (
    <div>
      <div className="header">
     <div className="headerleft">Logo</div>
     <div className="headerright">
     {
      navitems.map((i) =>(
         <div className="about">{i.name}</div>
      ))
     }
    {/* <div className="headerright">
        <div className="about">About</div>
        <div className="work">Work</div>
        <div className="contact">Contact</div>
    </div></div>
      
    </div> */}
  </div>
</div>
</div>
  )
}

export default Header
