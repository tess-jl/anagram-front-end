export const selectUserAuthState = state => state.user;

export const selectErrorAuthState = state => state.error;

export const selectLoadingAuthState = state => state.loading;

export const selectVerifyState = state => !!selectUserAuthState(state);
