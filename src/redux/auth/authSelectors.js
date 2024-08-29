export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectAuthToken = (state) => state.auth.token;

export const selectLoading = (state) => state.auth.loading;

export const selectAuthError = (state) => state.auth.error;
