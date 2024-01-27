import {configureStore} from '@reduxjs/toolkit';
import {photoSlice} from './slices/photosSlice';

export const store = configureStore({
  reducer: {
    photo: photoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
