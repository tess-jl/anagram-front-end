import reducer from './authReducer';
import { fetchAuthLoading } from '../actions/authActions';

describe('Auth Reducer', () => {
  it('should return state with unknown action', () => {
    const action = { type: 'IM AN ACTION' };
    const state = { loading: false, user: null };

    const newState = reducer(state, action);

    expect(newState).toEqual(state);
  });

  it('it handles loading action', () => {
    const action = fetchAuthLoading();
    const state = { loading: false };

    const newState = reducer(state, action);

    expect(newState).toEqual({ loading: true });
  });
});
