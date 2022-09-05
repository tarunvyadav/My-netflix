import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
    const [show,handleShow] = useState(false);

    const transitionNavBar = ( ) => {
        if (window.scrollY > 100){
            handleShow(true);}

            else{
                handleShow(false)
            }

        }

        useEffect(()=> {
            window.addEventListener("scroll",transitionNavBar);
            return () => window.removeEventListener("scroll",transitionNavBar);
         },[])

    



  return (
    <div className={`nav ${show &&`nav__black`}`}>
     <div className='nav__contents'>
      <img className='nav__logo'
      src="https://flyclipart.com/thumb2/netflix-82871.png"
      />

      <img className='nav__avatar'
      src="data:image/png;base64,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"
      />
    </div>
    </div>

 
  )
  }

export default Nav