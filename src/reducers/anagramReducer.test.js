import reducer from './anagramsReducer';

describe('anagram reducer tests', () => {
  it('returns current state when it does not understand the action type', () => {
    const state = {
      loading: true, 
      anagrams: null
    };

    const newState = reducer(state, { type: 'haha' });
    
    expect(newState).toEqual(state);
  });

});
