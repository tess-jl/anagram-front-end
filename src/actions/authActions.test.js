import { 
  fetchAuthLoading, 
  FETCH_AUTH_LOADING, 
  fetchVerifyAuthActionCreator, 
  FETCH_VERIFY_AUTH, 
  fetchSignupAuthActionCreator, 
  FETCH_SIGNUP_AUTH, 
  fetchLoginAuthActionCreator, 
  FETCH_LOGIN_AUTH 
} from './authActions';

describe('tests for auth actions', () => {
  it('creates an auth loading actions', () => {
    const action = fetchAuthLoading();

    expect(action).toEqual({
      type: FETCH_AUTH_LOADING,
    });
  });

  it('creates an auth verify action', () => {
    const action = fetchVerifyAuthActionCreator();

    expect(action).toEqual({
      type: FETCH_VERIFY_AUTH
    });
  });

  it('creates an auth sign up action', () => {
    const action = fetchSignupAuthActionCreator({
      email: 'tess@tess.com',
      password: 'password'
    });

    expect(action).toEqual({
      type: FETCH_SIGNUP_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      }
    });
  });

  it('creates an auth login action', () => {
    const action = fetchLoginAuthActionCreator({
      email: 'tess@tess.com',
      password: 'password'
    });

    expect(action).toEqual({
      type: FETCH_LOGIN_AUTH, 
      payload: {
        email: 'tess@tess.com',
        password: 'password'
      }
    });
  });

});

