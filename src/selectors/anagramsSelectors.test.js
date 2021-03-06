import { selectAnagrams, selectAnagramsLoading } from './anagramsSelectors';

describe('anagram selectors', () => {
  it('selects anagrams from state', () => {
    const state = {
      anagram: {
        loading: false,
        anagrams: ['hi', 'ih']
      }
    };

    expect(selectAnagrams(state)).toEqual(['hi', 'ih']);
  });

  it('selects the anagrams loading state', () => {
    const state = {
      anagram: {
        loading: false,
        anagrams: []
      }
    };

    expect(selectAnagramsLoading(state)).toEqual(false);
  });

});
