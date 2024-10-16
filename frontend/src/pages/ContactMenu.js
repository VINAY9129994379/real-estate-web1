import React from 'react'
import ContactHeader from '../components/ContactHeader'
import ContactDetail from '../components/ContactDetail'
import ContactMap from '../components/ContactMap'
import Contact from '../components/Contact'


function ContactMenu() {
  return (
    <div className='contact-menu'>
      <ContactHeader/>
      <br/>
      <ContactDetail/>
      <br/>
      <ContactMap/>
      <br/>
      <Contact/>
      
      

     
    </div>
  )
}

export default ContactMenu