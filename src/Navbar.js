import React from 'react';
import "./Navbar.css";
import smallpic from './Images/smallpic.png';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ShareIcon from '@mui/icons-material/Share';

const Navbar = (props) => {
  
  return (
    
        <div className='Navbar'>
            <div className='eventlogo'>
                <img className='smallpic' src={smallpic} alt="image" />
                  <div className='eventitle'>
                     <h3>{props.name}<br/>{props.date}</h3>
                  </div>
              </div>
             
              <div className='event'>
                <h3><CheckCircleIcon style={{color: "Green",fontsize:"12px"}} /> <span style={{color:"white",fontSize:"15px",position:"absolute",top:"18px",margin:"2px"}}>{props.active}</span> <br/>
                <ContentCopyIcon style={{color:"white",fontSize:"17px", margininlinestart:"16px"}}/>  <ShareIcon  style={{color:"white",fontSize:"17px"}}/></h3>
                
              </div>
        </div>
   
  )
}

export default Navbar;