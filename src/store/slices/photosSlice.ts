import {createSlice} from '@reduxjs/toolkit';
import {fetchPhotos} from '../thunk/getPhotos';
import {Photo} from '../../types';

interface InitialStateType {
  results: Photo[];
  page: number;
  error?: string;
  loadingStatus: 'pending' | 'fulfilled' | 'loading';
}

const initialState: InitialStateType = {
  results: [],
  page: 1,
  loadingStatus: 'pending',
};
export const photoSlice = createSlice({
  name: 'photos',
  reducers: {
    incrementPage: state => {
      state.page += 1;
    },
    resetPhotos: state => {
      state.results = [];
      state.page = 1;
      state.loadingStatus = 'pending';
    },
  },
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.results = state.results.concat(action.payload);
      state.loadingStatus = 'fulfilled';
    });
    builder.addCase(fetchPhotos.pending, state => {
      state.loadingStatus = 'pending';
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const {resetPhotos, incrementPage} = photoSlice.actions;
export default photoSlice.reducer;
