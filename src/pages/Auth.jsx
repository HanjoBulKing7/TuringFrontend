import React from 'react'
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';

function Auth() {
  const token = "myVeryOwnPersonalDummyCustomToken";
  return (
    <div className='flex items-center justify-center h-full ' >
        {token ? <SignUpForm /> : <LoginForm />}
    </div> 
  )
}

export default Auth