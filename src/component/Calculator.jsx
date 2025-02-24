import React, { useState } from 'react'
import './Calculator.css'
import Click_Btn from './Click_Btn'
import Zero from './Zero'
const calculator = () => {
  let [data,setData]=useState('');


  
  return (
    <div className='cal'>
      <div className="first">
        <textarea type="text" className='input_data' value={data} disabled wrap='soft'/>
      </div>
      <div className="second" onClick={(e)=>{
      
        if(e.target.tagName=='BUTTON'){
          setData((prev)=>{
            if(e.target.innerText==='⌫'){
               let temp=prev.slice(0,-1);
               return temp;
            }
            if(e.target.innerText=='C'){
              return '';
            }
            if(e.target.innerText=='='){
              try{
                return eval(prev);
              }catch(err){
                
                return 'enter an valid input expression'
              }
            }
          
            return prev+e.target.innerText});
        }
       
         
      }
      }>
          <div className="firstRow">
            <Click_Btn inside='C' color='grey' fontColor='black'/>
            <Click_Btn inside=' &#9003;' color='grey'fontColor='black'/>
            <Click_Btn inside='%' color='grey'fontColor='black'/>
            <Click_Btn inside='/' color='orange' fontColor='white'/>
          </div>
          <div className="firstRow">
            <Click_Btn inside='7' color=' rgb(35, 34, 34)' fontColor='white'/>
            <Click_Btn inside='8' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='9' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='*' color='orange' fontColor='white'/>
          </div>
          <div className="firstRow">
            <Click_Btn inside='4' color=' rgb(35, 34, 34)' fontColor='white'/>
            <Click_Btn inside='5' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='6' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='-' color='orange' fontColor='white'/>
          </div>
          <div className="firstRow">
            <Click_Btn inside='1' color=' rgb(35, 34, 34)' fontColor='white'/>
            <Click_Btn inside='2' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='3' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='+' color='orange' fontColor='white'/>
          </div>
          <div className="lastRow">
            <Zero  inside='0' color=' rgb(35, 34, 34)' fontColor='white'/>
            <Click_Btn inside='.' color=' rgb(35, 34, 34)'fontColor='white'/>
            <Click_Btn inside='=' color='orange' fontColor='white' />
          </div>
      </div>
    </div>
  )
}

export default calculator
