export const FETCH_AUTH_LOADING = 'FETCH_AUTH_LOADING';
export const fetchAuthLoading = () => ({
  type: FETCH_AUTH_LOADING
});

export const FETCH_VERIFY_AUTH = 'FETCH_VERIFY_AUTH';
export const fetchVerifyAuthActionCreator = () => ({
  type: FETCH_VERIFY_AUTH
});

export const FETCH_SIGNUP_AUTH = 'FETCH_SIGNUP_AUTH';
export const fetchSignupAuthActionCreator = user => ({
  type: FETCH_SIGNUP_AUTH, 
  payload: user
});

export const FETCH_LOGIN_AUTH = 'FETCH_LOGIN_AUTH';
export const fetchLoginAuthActionCreator = user => ({
  type: FETCH_LOGIN_AUTH, 
  payload: user
});

