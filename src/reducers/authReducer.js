import { SET_AUTH_LOADING, SET_SESSION, SET_SESSION_ERROR } from '../actions/authActions';

export default function reducer(state, action) {
  switch(action.type){
    case SET_AUTH_LOADING:
      return { ...state, loading: true };
    case SET_SESSION:
      return { ...state, loading: false, user: action.payload };
    case SET_SESSION_ERROR:
      return { ...state, loading: false, user: null, error: action.payload };
    default:
      return state;
  }
}
