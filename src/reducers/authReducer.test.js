import reducer from './authReducer';
import { setSession, setAuthLoading, setSessionError } from '../actions/authActions';

describe('Auth Reducer', () => {
  it('should return state with unknown action', () => {
    const action = { type: 'IM AN ACTION' };
    const state = { loading: false, user: null };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('it handles loading action', () => {
    const action = setAuthLoading();
    const state = { loading: false };

    const newState = reducer(state, action);

    expect(newState).toEqual({ loading: true });
  });

  it('handles setSession action', () => {
    const action = setSession({ _id: '1234', email: 'tess@tess.com' });
    const state = { loading: true, user: null };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: { _id: '1234', email: 'tess@tess.com' }
    });
  });

  it('handles setSessionError action', () => {
    const action = setSessionError('NONNONONONONON');
    const state = { loading: true, error: null, user: null };

    const newState = reducer(state, action);

    expect(newState).toEqual({
      loading: false,
      user: null,
      error: 'NONNONONONONON'
    });
  });
});
