import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  const [email, setEmail] = useState('');

  const emailClick = () => {
    alert('You have been signed up!');
    setEmail('');  
  }

  return (
    <div className='footer_container'>
      <div className='footer_logo'>
        <img className='footer_logo_image' src={logo} alt="Logo" />
      </div>
      <div className='footer_contactus'>
        <h2>Contact Us</h2>
        <div className="contact-item">
          <FontAwesomeIcon className='footer_icon' icon={faLocationDot} />
          <p>12917 Village Blvd., Madeira Beach, FL 33708</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon className='footer_icon' icon={faClock} />
          <p>Sunday - Thursday: 10am - 9pm<br />Friday - Saturday: 10am - 10pm</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon className='footer_icon' icon={faPhone} />
          <p>(727) 954-3417</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon className='footer_icon' icon={faEnvelope} />
          <p>lorisoapandsponge2@yahoo.com</p>
        </div>
      </div>
      <div className='footer_email'>
        <h3>SIGN UP FOR OUR NEWSLETTER</h3>
        <p>Email</p>
        <input className='email_signup' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button className='email_button' onClick={emailClick}>Submit</button>
      </div>
    </div>
  );
}

export default Footer;
