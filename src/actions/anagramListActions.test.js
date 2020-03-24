import { 
  FETCH_ANAGRAMS_LOADING,
  fetchAnagramsLoading,
  FETCH_ANAGRAMS, 
  fetchAnagramsActionCreator
} from './anagramListActions';


describe('tests for anagram list actions', () => {
  it('creates an anagram list loading action', () => {
    const action = fetchAnagramsLoading();

    expect(action).toEqual({
      type: FETCH_ANAGRAMS_LOADING
    });
  });

  it('creates an anagram list action', () => {
    const action = fetchAnagramsActionCreator({
      anagrams: ['hi', 'ih']
    });

    expect(action).toEqual({
      type: FETCH_ANAGRAMS,
      payload: {
        anagrams: ['hi', 'ih']
      }
    });
  });
});
