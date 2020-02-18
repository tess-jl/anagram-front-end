import React, { useState } from 'react';
import { useAnagrams } from '../../hooks/anagrams';

const Search = () => {
  const [wordToAnagram, setWordToAnagram] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    useAnagrams(wordToAnagram);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" min='2' max='10' maplaceholder="word to anagram" onChange={({ target }) => setWordToAnagram(target.value)} /> 
      <button>anagram!</button>
    </form>
  );
};

export default Search; 
