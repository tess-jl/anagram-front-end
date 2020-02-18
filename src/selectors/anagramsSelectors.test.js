import { selectAnagrams, selectAnagramsLoading } from './anagramsSelectors';

describe('anagram selectors', () => {
  it('selects anagrams from state', () => {
    const state = {
      loading: false,
      anagrams: ['hi', 'ih']
    };

    expect(selectAnagrams(state)).toEqual(['hi', 'ih']);
  });

  it('selects the anagrams loading state', () => {
    const state = {
      loading: false,
      anagrams: null
    };

    expect(selectAnagramsLoading(state)).toEqual(false);
  });

});
