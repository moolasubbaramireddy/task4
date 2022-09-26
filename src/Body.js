import React from 'react'
import Largepic from './Images/Largepic.png';
import "./Body.css"

function Body(props) {
  return (
    <div className='body' >
          <div className='block1'>
            <div>
              <p>Event Type </p>
              <span>{props.type}</span> 
           
            </div>
            <div>
              <p>Category</p>
              <span>{props.Category}</span>
              
            </div>
            <div>
              <p>Maximum Capacity </p>
              <span>{props.Capacity}</span>
            </div>
            <div>
              <p>No. Of Boxes</p>
              <span>{props.boxs}</span>
            </div>
          </div>
          <div className='block2'>
          <div>
              <p> PublicEvent</p>
              <span>{props.event}</span>
            </div>
            <div>
              <p className='location'>Location</p>
              <span className='location' style={{right:"13px"}}>{props.location}</span>
            </div>
            <div>
              <p className='Revesve'>Allow Users to Revesve Box </p>
              <span className='Revesve' style={{left:"15px"}}>{props.allowusers}</span>
              
            </div>
            <div>
              <p className='Guest'>Guest Allowed? </p>
              <span className='Guest'>{props.guest}</span>
              
            </div>
          </div>
          <div className='block3'>
            <div>
            <img src={Largepic} alt="image" />
            </div>
              <div className='descrption'>
                <p>Descrpton</p>
                <span> {props.Description}</span>
              </div>
              
          </div>
        </div>
  )
}

export default Body