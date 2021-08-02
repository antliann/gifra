import {
  createSlice, createAsyncThunk, createStore, applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const initialState = {
  isFulfilled: true,
  isPending: false,
  isRejected: false,
  searchResults: null,
};

export const searchGifs = createAsyncThunk('searchGifs', async () => {
  fetch('https://mywebsite.com/mydata.json')
    .then((response) => response.json())
    .then((responseJson) => responseJson, (error) => console.log(error));
});

const searchSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [searchGifs.pending]: (state) => ({
      ...state,
      isPending: true,
      isFulfilled: false,
      isRejected: false,
    }),
    [searchGifs.rejected]: (state) => ({
      ...state,
      isRejected: true,
      isPending: false,
      isFulfilled: false,
    }),
    [searchGifs.fulfilled]: (state, action) => ({
      ...state,
      isFulfilled: true,
      isPending: false,
      isRejected: false,
      searchResults: action.payload,
    }),
  },
});

export const store = createStore(searchSlice.reducer, applyMiddleware(thunk));
