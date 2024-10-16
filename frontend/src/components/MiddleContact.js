import React from 'react'
import './MiddleContact.css'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
function MiddleContact() {
  return (
    <div className='middle-product'>
                        <h3>YOUR DREAM HOUSE IS ONE STEP AWAY</h3>


        <div className='middle-product-left'>
            <CallIcon/>
            <h1>Call Us</h1>
            <p>Free Calls <br/><span>+91 9129994379</span></p>

        </div>
        <div className='middle-product-center'>
            <LocationOnIcon/>
            <h1>Find Us</h1>
            <p>500 Terry Francine St.<br/><span>San Francisco, CA 94158</span></p>

        </div>
        <div className='middle-product-right'>
            <EmailIcon/>
            <h1>Email Us</h1>
            <p>vinay2272001@gmail.com <br/><span>info@mysite.com</span></p>

        </div>




    </div>
  )
}

export default MiddleContact