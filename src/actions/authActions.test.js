import { } from './authActions';

describe('tests for auth actions', () => {
  it('creates an auth loading actions', () => {
    const action = fetchAuthLoading();

    expect(action).toEqual({
      type: FETCH_AUTH_LOADING,
    });
  });

  it('creates an auth verify action', () => {
    const action = fetchVerifyAuth();

    expect(action).toEqual({
      type: FETCH_VERIFY_AUTH
    });
  });

  it('creates an auth sign up action', () => {
    const action = fetchSignupAuth({
      type: FETCH_SIGNUP_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      } });

    expect(action).toEqual({
      type: FETCH_SIGNUP_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      }
    });
  });

  it('creates an auth login action', () => {
    const action = fetchLoginAuth({
      type: FETCH_LOGIN_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      } });

    expect(action).toEqual({
      type: FETCH_LOGIN_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      }
    });
  });

});

