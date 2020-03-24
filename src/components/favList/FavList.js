import React from 'react';
import { useSelectUser } from '../../hooks/anagrams';
import Signup from './Signup';


const FavList = () => {
  const user = useSelectUser();
  
  

  if(!user) return <Signup />;

  return <p>you are logged in</p>;
};

export default FavList;
