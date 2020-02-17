import { fetchAnagramsAction, FETCH_ANAGRAMS, FETCH_ANAGRAMS_LOADING } from './anagramListActions';
jest.mock('../services/anagramApi.js');

describe('tests for anagram list actions', () => {
  it('creates an action to fetch an anagram list', () => {
    const dispatch = jest.fn();
    const action = fetchAnagramsAction('tessl');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({ type: FETCH_ANAGRAMS_LOADING });
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_ANAGRAMS, 
          payload: [
            'less',
            'lest',
            'lets',
            'tels',
            'les',
            'let',
            'sets',
            'set',
            'es',
            'e',
            'ls',
            'l',
            'ts',
            's',
            't'
          ]
        });

      });

  });

});
