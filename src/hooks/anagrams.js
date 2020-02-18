import React, { createContext, useReducer, useContext } from 'react';
import reducer from '../reducers/anagramsReducer';
import { fetchAnagrams } from '../services/anagramApi';
import { fetchAnagramsLoading, fetchAnagramsActionCreator } from '../actions/anagramListActions';
import { selectAnagrams, selectAnagramsLoading } from '../selectors/anagramsSelectors';

const AnagramsContext = createContext();

export const AnagramsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true, 
    anagrams: null
  });

  const getAnagrams = word => {
    dispatch(fetchAnagramsLoading());
    return fetchAnagrams(word)
      .then(anagrams => {
        dispatch(fetchAnagramsActionCreator(anagrams));
      });
    //could implement a catch if we add errors to this reducer
  };

  return (
    <AnagramsContext.Provider value={ state, getAnagrams }>
      {children}
    </AnagramsContext.Provider>
  );
};

//using this for handle submit in Search.js
export const useAnagrams = () => {
  const { getAnagrams } = useContext(AnagramsContext);
  return getAnagrams;
};

//use this for tracking the current anagrams
export const useSelectAnagrams = () => {
  const { state } = useContext(state);
  return selectAnagrams(state);
};

export const useSelectAnagramsLoading = () => {
  const { state } = useContext(state);
  return selectAnagramsLoading(state);
};
