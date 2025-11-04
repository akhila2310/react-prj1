import React from 'react'
import './Grid.css'
import GridImage1 from '../../Assets/images/Rectangle 19.png'
import GridImage2 from '../../Assets/images/Skills Card Icon.png'
import GridImage3 from '../../Assets/images/Skills Card Icon (1).png'


let grid=[{
  GridImage:GridImage1
},{
  GridImage:GridImage2
},{
  GridImage:GridImage3
}]
 let gridtitle=[{
  GridTitle:"Product Design"
 },{
   GridTitle:"visual Design"
  
 },{
 GridTitle:"er"}]

function Grid() {
  return (
    <div>
      <div className="grid">
        <div className="gridleft">
        {
          grid.map((i) =>(
            <>
             <div className="gridleft1"><img src={i.GridImage} /></div>
              <div className="gridleft2">{i.GridTitle}</div>
              </>
          ))
        }
        </div>
            {/* <div className="gridleft">
            <div className="gridleft1"><img src="Rectangle 19.png"/></div>
            <div className="gridleft2">Product Design</div>
            <div className="gridleft3">This is a template Figma,file turned
           into code using Anima.Learn more at
            AnimaApp.com</div>
            </div>
            <div className="gridmid">
                <div className="gridmid1"><img src="images/Skills Card Icon.png" /></div>
                <div className="gridmid2">Visual Disign</div>
                <div className="gridmid3">This is a template Figma,file turneD
                into code using Anima.Learn more at
                AnimaApp.com</div>

            </div>
            <div className="gridright">
                <div className="gridright1"><img src="images/Skills Card Icon (1).png" /></div>
                <div className="gridright2">Art Direction</div>
                <div className="gridright3">This is a template Figma,file turned into code using Anima.Learn more at AnimaApp.com</div>
            </div>

          </div> 
    </div> */}
    </div>
    </div>
  )
}

export default Grid
