export const selectUserAuthState = state => state.auth.user;

export const selectErrorAuthState = state => state.auth.error;

export const selectLoadingAuthState = state => state.auth.loading;

export const selectVerifyState = state => !!selectUserAuthState(state);
