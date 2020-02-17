import React, { useState } from 'react';

const Search = () => {
  const [wordToAnagram, setWordToAnagram] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    //function using wordToAnagram
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="word to anagram" onChange={({ target }) => setWordToAnagram(target.value)} /> 
      <button>anagram!</button>
    </form>
  );
};

export default Search; 
