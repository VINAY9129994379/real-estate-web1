// ContactDetail.js
import React from 'react';
import './ContactDetail.css';

function ContactDetail() {
  return (
    <div className='Contact-detail'>
      <div className='contact-detail-contain'>
        <div className='contact-detail-left'>
          <h1>OUR OFFICE</h1>
          <p>info@mysite.com</p>
        </div>
        <div className='contact-detail-center'>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
        </div>
        <div className='contact-detail-right'>
          <p>Tel: 123-456-7890</p>
          <p>Fax: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
