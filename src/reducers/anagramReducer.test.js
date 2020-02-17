import reducer from './anagramsReducer';
import { fetchAnagramsLoading } from '../actions/anagramListActions';

describe('anagram reducer tests', () => {
  it('returns current state when it does not understand the action type', () => {
    const state = {
      loading: true, 
      anagrams: null
    };

    const newState = reducer(state, { type: 'haha' });

    expect(newState).toEqual(state);
  });

  it('handles the fetch anagrams loading action ', () => {
    const action = fetchAnagramsLoading();
    const state = {
      loading: false, 
      anagrams: null
    };

    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      loading: true, 
      anagrams: null
    });
  });

});
