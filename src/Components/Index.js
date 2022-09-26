import React from 'react'
import './Index.css'

const Button = ({value, onClick}) => (
<button 
className='btn'
onClick={(e)=>onClick(e)}
>{value}</button>
)

  


export default Button