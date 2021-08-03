import { createSlice, createAsyncThunk, configureStore } from '@reduxjs/toolkit';
import { formRequest } from './methods';

const initialState = {
  isFulfilled: true,
  isPending: false,
  isRejected: false,
  searchResults: null,
};

export const searchGifs = createAsyncThunk('searchGifs', (params) => (
  fetch(formRequest(params))
    .then((response) => response.json())
));

const searchSlice = createSlice({
  name: 'searchGifs',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchGifs.pending, (state) => ({
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      }))
      .addCase(searchGifs.rejected, (state) => ({
        ...state,
        isRejected: true,
        isPending: false,
        isFulfilled: false,
      }))
      .addCase(searchGifs.fulfilled, (state, action) => ({
        ...state,
        isFulfilled: true,
        isRejected: false,
        isPending: false,
        searchResults: action.payload,
      }));
  },
});

export const store = configureStore({
  reducer: searchSlice.reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
