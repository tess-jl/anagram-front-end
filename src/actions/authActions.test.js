import { 
  setAuthLoading, 
  SET_AUTH_LOADING,
  setSession,
  SET_SESSION,
  setSessionError,
  SET_SESSION_ERROR, 
} from './authActions';

describe('tests for auth actions', () => {
  it('creates an auth loading actions', () => {
    const action = setAuthLoading();

    expect(action).toEqual({
      type: SET_AUTH_LOADING,
    });
  });

  it('creates a setSession action', () => {
    const action = setSession({ _id: '1234', email: 'tess@tess.com' });
    
    expect(action).toEqual({
      type: SET_SESSION,
      payload: { _id: '1234', email: 'tess@tess.com' }
    });
  });

  it('creates a setSessionError action ', () => {
    const action = setSessionError('DONT DO THAT');
    
    expect(action).toEqual({
      type: SET_SESSION_ERROR,
      payload: 'DONT DO THAT'
    });
  });
});

