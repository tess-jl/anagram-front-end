import { FETCH_ANAGRAMS_LOADING, FETCH_ANAGRAMS } from '../actions/anagramListActions';

export default function reducer(state, action) {
  switch(action.type) {
    case FETCH_ANAGRAMS_LOADING:
      return { ...state, loading: true };
    case FETCH_ANAGRAMS:
      return { ...state, loading: false, anagrams: action.payload };
      
    default: 
      return state;
  }
}
