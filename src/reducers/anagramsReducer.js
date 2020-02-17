import { FETCH_ANAGRAMS_LOADING } from '../actions/anagramListActions';

export default function reducer(state, action) {
  switch(action.type) {
    case FETCH_ANAGRAMS_LOADING:
      return { ...state, loading: true };
      
    default: 
      return state;
  }
}
