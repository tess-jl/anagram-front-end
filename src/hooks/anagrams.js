import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import anagramsReducer from '../reducers/anagramsReducer';
import authReducer from '../reducers/anagramsReducer';
import { fetchAnagrams } from '../services/anagramApi';
import { fetchAnagramsLoading, fetchAnagramsActionCreator } from '../actions/anagramListActions';
import { selectAnagrams, selectAnagramsLoading } from '../selectors/anagramsSelectors';

const AnagramsContext = createContext();

export const AnagramsProvider = ({ children }) => {
  const [anagramState, anagramDispatch] = useReducer(anagramsReducer, {
    loading: false, 
    anagrams: []
  });

  const [authState, authDispatch] = useReducer(authReducer, {
    loading: false,
    user: null,
    error: null
  });


  const getAnagrams = word => {
    anagramDispatch(fetchAnagramsLoading());
    return fetchAnagrams(word)
      .then(anagrams => {
        anagramDispatch(fetchAnagramsActionCreator(anagrams));
      });
    //could implement a catch if we add errors to this reducer
  };

  return (
    <AnagramsContext.Provider value={{ anagramState, getAnagrams, authState }}>
      {children}
    </AnagramsContext.Provider>
  );
};

AnagramsProvider.propTypes = {
  children: PropTypes.node
};

//using this for handle submit in Search.js
export const useAnagrams = () => {
  const { getAnagrams } = useContext(AnagramsContext);
  return getAnagrams;
};

//use this for tracking the current anagrams
export const useSelectAnagrams = () => {
  const { anagramState } = useContext(AnagramsContext);
  return selectAnagrams(anagramState);
};

export const useSelectAnagramsLoading = () => {
  const { anagramState } = useContext(AnagramsContext);
  return selectAnagramsLoading(anagramState);
};
