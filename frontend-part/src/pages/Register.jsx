import React from 'react'

const Register = () => {
  return (
      <div className='registerPage'>
          <div className='form noScroll'>
          <h1>Register</h1>
    <div className='inputGroup'>
      <label htmlFor='fullName'>Full Name:</label>
      <input type='text' id='fullName' placeholder='Enter your full name' />
    </div>
    <div className='inputGroup'>
      <label htmlFor='teamName'>Team Name:</label>
      <input type='text' id='teamName' placeholder='Enter your team name' />
    </div>
    <div className='inputGroup'>
      <label htmlFor='screenshot'>Screenshot of Transaction:</label>
      <input type='file' id='screenshot' />
    </div>
    <div className='inputGroup'>
      <label htmlFor='transactionID'>Transaction ID:</label>
      <input type='text' id='transactionID' placeholder='Enter the transaction ID' />
    </div>
    <div className='inputGroup'>
      <input type='submit' value='Submit' />
    </div>
  </div>

          </div>
    
  )
}

export default Register