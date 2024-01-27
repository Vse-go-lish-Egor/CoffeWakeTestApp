import {API_KEY, BASE_URL} from '@env';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Photo} from '../../types';

export const fetchPhotos = createAsyncThunk(
  'photos/getPhotos',
  async (page: number) => {
    const response = await axios.get(
      `${BASE_URL}/?client_id=${API_KEY}&page=${page}`,
    );
    const data: Photo = response.data;
    return data;
  },
);
