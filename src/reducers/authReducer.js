import { FETCH_AUTH_LOADING } from '../actions/authActions';

export default function(state, action) {
  switch(action.type){
    case FETCH_AUTH_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
