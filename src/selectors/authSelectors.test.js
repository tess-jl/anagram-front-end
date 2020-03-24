import { selectUserAuthState, selectErrorAuthState, selectLoadingAuthState } from './authSelectors';

describe('Auth Selectors', () => {
  it('should select user from authState', () => {
    const state = { auth: 
      {
        user: {
          _id: '1234',
          email: 'tess@tess.com'
        }
      } };
    const selector = selectUserAuthState(state);

    expect(selector).toEqual({
      _id: '1234',
      email: 'tess@tess.com'
    });
  });

  it('should select error from authState', () => {
    const state = { auth: 
      {
        error: 'nonononon' 
      }
    };
    const selector = selectErrorAuthState(state);

    expect(selector).toEqual('nonononon');
  });

  it('should select loading state from authState', () => {
    const state = { auth: 
      {
        loading: true
      } 
    };
    const selector = selectLoadingAuthState(state);

    expect(selector).toEqual(true);
  });
});
