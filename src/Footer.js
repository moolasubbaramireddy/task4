import React from 'react'
import Button from './Components/Index'
import './Footer.css'

const Footer = () => {
  const handlerClick =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='footer'>
        <div >
          <button className='event'>END EVENT</button>
        
        </div >
       <div className='buttons'>
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />
        <Button
        onClick={()=>handlerClick()} 
        value='STREAMING'
        />

      
    
       </div>
    </div>
  )
}

export default Footer