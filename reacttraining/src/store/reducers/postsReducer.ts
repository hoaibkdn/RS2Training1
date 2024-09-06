/** @format */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostsState } from './../../types/post'
import { fetchData } from '../../utils/fetchData';

export const fetchListPosts = createAsyncThunk('posts/fetchListPosts', async () => {
	// console.log('postId ', postId)
  try {
    const dataReponse = await fetchData('posts');
		// Chalenge 13:
		/**
		 * fetch users: []
		 * display user in each post
		 */
		return dataReponse
  } catch (error) {
		return error
    // console.error('Error fetching posts:', error);
  }
});

const initialState: PostsState = {
    list: [],
    loading: 'idle', // 'idle | 'loading' | 'succeed' | 'failed' 
		error: ''
  }

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchListPosts.pending, (state, action) => {
			state.loading = 'loading'
		})
		builder.addCase(fetchListPosts.fulfilled, (state, action) => {
			state.list = action.payload || []
			state.loading = 'succeed'
		})
		builder.addCase(fetchListPosts.rejected, (state, action) => {
			state.loading = 'failed'
		})
	}
});

export const postsReducer = postsSlice.reducer;
