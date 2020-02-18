import React, { useState } from 'react';
import { useAnagrams } from '../../../hooks/anagrams';

const Search = () => {
  const [wordToAnagram, setWordToAnagram] = useState('');
  const anagrams = useAnagrams();

  const handleSubmit = () => {
    event.preventDefault();
    anagrams(wordToAnagram);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Time to Anagram</h2>
      <input type="text" min='2' max='10' placeholder="word to anagram" onChange={({ target }) => setWordToAnagram(target.value)} /> 
      <button>anagram!</button>
    </form>
  );
};

export default Search; 
