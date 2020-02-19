import React, { useState } from 'react';
import { useSignup } from '../../hooks/anagrams';

const Signup = () => {
  const signup = useSignup();
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={email} 
        onChange={({ target }) => setEmail(target.value)} />
      <input 
        type="password" 
        value={password}  
        onChange={({ target }) => setPassword(target.value)} />
      <button>Signup</button>
    </form>
  );
};

export default Signup;
