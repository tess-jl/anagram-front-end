import React from 'react'; 
import Anagram from './anagram/Anagram';
import { useSelectAnagrams, useSelectAnagramsLoading } from '../../../hooks/anagrams';
import Loading from '../../loading/Loading';

const AnagramsList = () => {
  const anagramsArray = useSelectAnagrams();
  const loading = useSelectAnagramsLoading();

  if(loading) return <Loading />; 

  const anagramsForList = anagramsArray.map(anagram => (
    <li key={anagram}>
      <Anagram word={anagram} />
    </li>
  ));

  return (
    <>
      <h2>Here are your anagrams:</h2>
      <ul>
        {anagramsForList}
      </ul>
    </>
  );
};

export default AnagramsList;
