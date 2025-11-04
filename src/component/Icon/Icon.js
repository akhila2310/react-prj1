import React from 'react'
import './Icon.css'
import Icon1 from '../../Assets/images/Group 5334.png'
import Icon2 from '../../Assets/images/image 1 (Traced) (2).png'
import Icon3 from '../../Assets/images/image 5 (Traced).png'
import Icon4 from '../../Assets/images/image 2 (Traced).png'
import Icon5 from '../../Assets/images/image 7 (Traced).png'

let icon=[{
  iconImage:Icon1
},{
  iconImage:Icon2
},{
  iconImage:Icon3
},{
  iconImage:Icon4
},{
  iconImage:Icon5
}]

function Icon() {
  return (
    <div>
      <div className="icon">
        {
          icon.map((i) =>(
             <div className="icon1">
              <img src={i.iconImage}/></div>

          ))
        }
            {/* <div className="icon1">
              <img src="images/Group 5334.png" /></div>
            <div className="icon2"><img src="images/image 1 (Traced) (2).png" /></div>
            <div className="icon3"><img src="images/image 5 (Traced).png" /></div>
            <div className="icon4"><img src="images/image 2 (Traced).png" /></div>
            <div className="icon5"><img src="images/image 7 (Traced).png" /></div>
        </div>
    </div> */}
    </div>
    </div>
  )
}

export default Icon
