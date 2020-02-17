// import { fetchAnagrams } from '../services/anagramApi';

export const FETCH_ANAGRAMS_LOADING = 'FETCH_ANAGRAMS_LOADING';
export const fetchAnagramsLoading = () => ({
  type: FETCH_ANAGRAMS_LOADING
});

export const FETCH_ANAGRAMS = 'FETCH_ANAGRAMS';
export const fetchAnagramsActionCreator = anagrams => ({
  type: FETCH_ANAGRAMS, 
  payload: anagrams
});
