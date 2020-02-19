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

  useEffect(() => {
    authDispatch(setAuthLoading());
    fetchVerify()
      .then(user => authDispatch(setSession(user)))
      .catch(err => authDispatch(setSessionError(err)));
  }, []);


  const getAnagrams = word => {
    anagramDispatch(fetchAnagramsLoading());
    return fetchAnagrams(word)
      .then(anagrams => {
        anagramDispatch(fetchAnagramsActionCreator(anagrams));
      });
    //could implement a catch if we add errors to this reducer
  };

  const login = (email, password) => {
    authDispatch(setAuthLoading());
    return fetchLogin(email, password)
      .then(user => authDispatch(setSession(user)))
      .catch(err => authDispatch(setSessionError(err))); 
  };

  const signup = (email, password) => {
    authDispatch(setAuthLoading());
    return fetchSignup(email, password)
      .then(user => authDispatch(setSession(user)))
      .catch(err => authDispatch(setSessionError(err)));
  };

  return (
    <AnagramsContext.Provider value={{ anagramState, getAnagrams, authState, login, signup }}>
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

// authState extraction
export const useSelectUser = () => {
  const { authState } = useContext(AnagramsContext);
  return selectUserAuthState(authState);
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
  const { authState } = useContext(AnagramsContext);
  return selectLoadingAuthState(authState);
};

export const useSelectVerifyState = () => {
  const { authState } = useContext(AnagramsContext);
  return selectVerifyState(authState);
};
