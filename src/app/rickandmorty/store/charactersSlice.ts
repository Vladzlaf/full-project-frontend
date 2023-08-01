import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { charactersState } from '../types/character-state.type';
import { getCharacters } from './characters.actions';
import { charactersDto } from '../types/character-dto.type';

const charactersInitialState: charactersState = {
  data: [],
  isSuccess: false,
  errors: '',
  pending: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: charactersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ============ GET USERS ============ //
      .addCase(getCharacters.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCharacters.fulfilled, (state, action: PayloadAction<charactersDto[]>) => {
        state.pending = false;
        state.data = action.payload;
        state.isSuccess = true;
    })
    .addCase(getCharacters.rejected, (state, action: PayloadAction<any>) => {
        state.errors = action.payload;
        state.pending = false;
        state.isSuccess = false;
    });
  },
});
