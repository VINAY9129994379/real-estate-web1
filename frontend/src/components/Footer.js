import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left'>
                <p>VINYAS PROPERTIES</p>
                <br/>
                <br/>
                <p>© 2035 by VINYAS. Powered and secured by vinay property</p>

            </div>
            <div className='footer-center'>
                <ul className='footer-center-contain'>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>News</li>
                    <li>Team</li>
                    <li>Contact</li>

                </ul>
            </div>
            <div className='footer-right'>
                <p>500 Terry Francine Street<br/>
                <span>San Francisco, CA 94158<br/>
                <span>info@mysite.com</span>

</span>

</p>
            </div>
        </div>
    </div>
  )
}

export default Footer