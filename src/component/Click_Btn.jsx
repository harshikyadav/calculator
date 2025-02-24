import React from 'react'
import './Click_Btn.css'
const Click_Btn = (props) => {
  return (
    <button className='btn' style={{'backgroundColor':props.color,'color':props.fontColor}}>
         {props.inside}
    </button>
  )
}

export default Click_Btn
