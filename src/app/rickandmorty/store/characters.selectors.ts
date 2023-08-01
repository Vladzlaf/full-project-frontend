import { RootState } from 'store';

export const charactersSelectors = (state : RootState) => state.characters.data;