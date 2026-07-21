import React, { useState } from 'react'
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';

function Auth() {
  const [isLogin, setIsLogin] = useState(false); // false = signup por defecto

  return (
    <div className='flex-1 flex items-center justify-center'>
      {isLogin ? (
        <LoginForm onToggle={() => setIsLogin(false)} />
      ) : (
        <SignUpForm onToggle={() => setIsLogin(true)} />
      )}
    </div>
  );
}

export default Auth;