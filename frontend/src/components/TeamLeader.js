import React from 'react'
import './TeamLeader.css'
import Profile1 from '../assets/Profile1.png'
import Profile2 from '../assets/Profile2.png'
import Profile3 from '../assets/Profile3.png'
import Profile4 from '../assets/Profile4.png'
import Profile5 from '../assets/Profile5.png'
import Profile6 from '../assets/Profile6.png'

function TeamLeader() {
  return (
    <div className='team-leader'>
        <div className='team-leader-contain'>
            <div className='leader-profile-detail-1-left'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile1} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>


            <div className='leader-profile-detail-2-center'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile2} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>

            <div className='leader-profile-detail-3-right'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile3} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>
            <br/>
            <div className='leader-profile-detail-4-left'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile4} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>


            <div className='leader-profile-detail-5-center'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile5} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>

            <div className='leader-profile-detail-6-right'>
                <h1>Gregory Jems</h1>
                <p>Realtor # 123.456.78</p>
                <img src={Profile6} alt='Leader profile' />
                <h2>Email</h2>
                <p>info@mysite.com</p>
                  
                  <div className='leader-contact'>
                  <h2>Phone No</h2>
                  <p>+91 9129994379</p>
                  <p className='profile-social-id'>LinkedIn</p>
                  </div>

            </div>


        </div>
    </div>
  )
}

export default TeamLeader