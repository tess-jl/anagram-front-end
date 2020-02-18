import React from 'react'; 
import Anagram from './anagram/Anagram';
import { useSelectAnagrams } from '../../hooks/anagrams';

const AnagramList = () => {
  const anagramsArray = useSelectAnagrams();

  const anagramsForList = anagramsArray.map(anagram => (
    <li key={anagram}>
      <Anagram {...anagram} />
    </li>
  ));

  return (
    <>
      <h2>Here are your anagrams</h2>
      <ul>
        {anagramsForList}
      </ul>
    </>
  );
};

export default AnagramList;
