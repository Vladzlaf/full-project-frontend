import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from 'app/rickandmorty/store/charactersSlice';



const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
