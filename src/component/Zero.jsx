import React from 'react'
import './Zero.css'
const Zero = (props) => {
  return (
    <button className='zero' style={{'backgroundColor':props.color,'color':props.fontColor}}>
       {props.inside}
    </button>
  )
}

export default Zero
