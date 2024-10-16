import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='contact-left'>
            <h1>FIND YOUR NEXT HOME</h1>
            <br/>
            <br/>
            <p>I'm a paragraph. Click here to add your <br/>own text and edit me. It’s easy. Just<br/> click “Edit Text” or double click me to <br/>add your own content and make<br/> changes to the font. 

</p>

        </div>
        <div className='contact-right'>
          <h1>Contact Us</h1>
          <form className='form'>
            <div className='form-container'>
              <div className='name-details'>
                <label>First Name*</label>
                <input  type='text'/>
              </div>
              <div className='name-details-left'>
                <label>Last Name*</label>
                <input  type='text'/>
              </div>
              <div className='email-details'>
                <label>Email Name*</label>
                <input  type='email'/>
              </div>
            <div className='interested-details'>
              <p>Interested in</p>
              <label>
    <input type="radio" name="color" value="red" />
    Red
  </label>
  
  <label>
    <input type="radio" name="color" value="blue" />
    Blue
  </label>
  
  <label>
    <input type="radio" name="color" value="green" />
    Green
  </label>
  
              

              </div>
              <div className='message-details'>
                <label>Message*</label>
                <input  type='email'/>
                
                <button className='submit-btn' type="submit">Submit</button>

              </div>

</div>

          </form>


        </div>
    </div>
  )
}

export default Contact