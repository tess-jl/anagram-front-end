import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import anagramsReducer from '../reducers/anagramsReducer';
import authReducer from '../reducers/authReducer';
import { fetchAnagrams, fetchVerify, fetchLogin, fetchSignup } from '../services/anagramApi';
import { fetchAnagramsLoading, fetchAnagramsActionCreator } from '../actions/anagramListActions';
import { selectAnagrams, selectAnagramsLoading } from '../selectors/anagramsSelectors';
import { selectUserAuthState, selectLoadingAuthState, selectVerifyState } from '../selectors/authSelectors';
import { setAuthLoading, setSession, setSessionError } from '../actions/authActions';

const AnagramsContext = createContext();

const combineReducer = reducerObj => {
  return function(state, action){
    return Object.entries(reducerObj).reduce((acc, [key, reducer]) => {
      acc[key] = reducer(state[key], action);

      return acc;
    }, {});
  };
};

export const AnagramsProvider = ({ children }) => {
  const reducer = combineReducer({ anagram: anagramsReducer, auth: authReducer });
  const [state, dispatch] = useReducer(reducer, {
    anagram: {
      loading: false,
      anagrams: []
    },
    auth: {
      loading: false,
      user: null,
      error: null
    }
  });

  useEffect(() => {
    dispatch(setAuthLoading());
    fetchVerify()
      .then(user => dispatch(setSession(user)))
      .catch(err => dispatch(setSessionError(err)));
  }, []);


  const getAnagrams = word => {
    dispatch(fetchAnagramsLoading());
    return fetchAnagrams(word)
      .then(anagrams => {
        dispatch(fetchAnagramsActionCreator(anagrams));
      });
    //could implement a catch if we add errors to this reducer
  };

  const login = (email, password) => {
    dispatch(setAuthLoading());
    return fetchLogin(email, password)
      .then(user => dispatch(setSession(user)))
      .catch(err => dispatch(setSessionError(err))); 
  };

  const signup = (email, password) => {
    dispatch(setAuthLoading());
    return fetchSignup(email, password)
      .then(user => dispatch(setSession(user)))
      .catch(err => dispatch(setSessionError(err)));
  };

  return (
    <AnagramsContext.Provider value={{  getAnagrams, state, login, signup }}>
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
  const { state } = useContext(AnagramsContext);
  return selectAnagrams(state);
};

export const useSelectAnagramsLoading = () => {
  const { state } = useContext(AnagramsContext);
  return selectAnagramsLoading(state);
};

// authState extraction
export const useSelectUser = () => {
  const { state } = useContext(AnagramsContext);
  return selectUserAuthState(state);
};

export const useLogin = () => {
  const { login } = useContext(AnagramsContext);
  return login;
};

export const useSignup = () => {
  const { signup } = useContext(AnagramsContext);
  return signup;
};

export const useSelectAuthLoading = () => {
  const { state } = useContext(AnagramsContext);
  return selectLoadingAuthState(state);
};

export const useSelectVerifyState = () => {
  const { state } = useContext(AnagramsContext);
  return selectVerifyState(state);
};
