import React from 'react'
import inder from './img/inder.svg'

const Car = (props) => {
    return (
<svg  width="390" height={props.height} xmlns="http://www.w3.org/2000/svg">

 <g>
  <title>background</title>
  <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
 </g>
 <g>
  <title>Layer 1</title>
  <path fill={props.color} id="svg_1" d="m26.205999,12.559l-2.057999,-5.88c-0.561001,-1.602 -2.079,-2.679 -3.777,-2.679l-10.742001,0c-1.697999,0 -3.216,1.077 -3.776,2.678l-2.058,5.88c-1.099,0.723001 -1.795,1.972 -1.795,3.346001l0,7.096c0,1.105 0.895,2 2,2s2,-0.895 2,-2l0,-1.261c0,0 5.281,0.261 9,0.261s9,-0.261 9,-0.261l0,1.261c0,1.105 0.895,2 2,2s2,-0.895 2,-2l0,-7.096c0,-1.374001 -0.697001,-2.623 -1.794001,-3.345zm-19.611,-1.946l1.146,-3.274c0.281,-0.802 1.038,-1.339 1.888,-1.339l10.742001,0c0.85,0 1.607,0.537 1.888,1.339l1.146,3.274c0.179998,0.515 -0.249001,1.034 -0.788,0.947001c-1.961,-0.317 -4.482,-0.56 -7.617001,-0.56c-3.135,0 -5.656,0.243 -7.617,0.56c-0.539,0.087 -0.968,-0.432 -0.788,-0.947001zm-0.095,7.387c-0.828,0 -1.5,-0.672001 -1.5,-1.5s0.672,-1.5 1.5,-1.5s1.5,0.672 1.5,1.5s-0.672,1.5 -1.5,1.5zm11.5,-1l-6,0c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1l6,0c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1zm5.5,1c-0.827999,0 -1.5,-0.672001 -1.5,-1.5s0.672001,-1.5 1.5,-1.5s1.5,0.672 1.5,1.5s-0.672001,1.5 -1.5,1.5z"/>
 </g>
</svg>

    )
}

export default Car;