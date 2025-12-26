import React from 'react';
import '../CSS/SignIn.css';
import BsSignIn from './BsSignIn';
import { useState } from 'react';
function SignIn() {
  const [currentPage, setCurrentPage] = useState('user');
  
  return (
    <div>
      {currentPage === 'user' && (

        <div className='container-SignIn'>
      <h1>Sign In as Customer</h1>
      
      <div className="input-wrapper">
        <label className='input-label'>Username</label>
        <input 
          type="text"
          placeholder='john.doe'
          className='input-field'
        />
      </div>

      <div className="input-wrapper">
        <label className='input-label'>Email</label>
        <input 
          type="email"
          placeholder='john.doe@example.com'
          className='input-field'
        />
      </div>

      <div className="input-wrapper">
        <label className='input-label'>Password</label>
        <input 
          type="password"
          placeholder='........'
          className='input-field'
          />
      </div>

      <div className="signIn-action">
        <button className="signIn-btn">Sign In</button>
      </div>

      <div className="business-signIn">
        <span>Are you a business owner? <span className="highlight-link" onClick={()=>setCurrentPage('business')}>Sign In here.</span></span>
      </div>
    </div>
        )}
      {currentPage === 'business' &&(
      <BsSignIn/>
    )}
  </div>
    
  )
}

export default SignIn;

