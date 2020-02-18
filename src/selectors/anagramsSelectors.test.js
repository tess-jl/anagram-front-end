import { selectAnagrams } from './anagramsSelectors';

describe('anagram selectors', () => {
  it('selects anagrams from state', () => {
    const state = {
      loading: false,
      anagrams: ['hi', 'ih']
    };

    expect(selectAnagrams(state)).toEqual(['hi', 'ih']);
  });

});
