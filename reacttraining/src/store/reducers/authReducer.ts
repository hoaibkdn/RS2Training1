/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LOGIN } from './../actions';
import { fetchJson } from './../api';
const BASE_URL = 'http://localhost:5000';
export const login = createAsyncThunk(
  'login',
  async (userInfo: { username: string; password: string }) => {
    // username + password

    const authInfo = await fetchJson(BASE_URL + '/auth');
    return authInfo;
  }
);

const initialState = {
  isLoggedIn: false,
  loading: 'idle',
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(LOGIN, (state) => {
      state.isLoggedIn = true;
    });
    builder.addCase(login.fulfilled, (state, action: any) => {
      console.log('state ', state); //
      console.log('action ', action); // username + password from form
      // action payload: auth ->

      const formUserInfo = action.meta.arg;
      const authInfo = action.payload;
      if (
        formUserInfo.username === authInfo?.email &&
        formUserInfo.password === authInfo?.password
      ) {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log('state ', state);
      console.log('action ', action);
      state.isLoggedIn = false;
      state.error = 'Username or password is not correct';
    });
    // builder.addCase(''posts/fetchListPosts_REQUESTED', () => {

    // })

    // REQUEST -> loading
    // SUCCEED -> update data -> !loading
    // FAILED -> update
  },
});

export const authReducer = authSlice.reducer;
