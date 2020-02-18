export const SET_AUTH_LOADING = 'SET_AUTH_LOADING';
export const setAuthLoading = () => ({
  type: SET_AUTH_LOADING
});

export const SET_SESSION = 'SET_SESSION';
export const setSession = (user) => ({
  type: SET_SESSION,
  payload: user
});

export const SET_SESSION_ERROR = 'SET_SESSION_ERROR';
export const setSessionError = (error) => ({
  type: SET_SESSION_ERROR,
  payload: error
});
