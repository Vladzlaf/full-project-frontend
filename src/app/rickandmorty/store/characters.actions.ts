import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { charactersDto } from '../types/character-dto.type';

export const getCharacters = createAsyncThunk<charactersDto[], void>(
    'getCharacters',
    async (_, { rejectWithValue }) => {
        try {
            const response = await Promise
            .all([ 
                axios.get('http://localhost:3333/characters/1'),  
                axios.get('http://localhost:3333/characters/2'),
            ]);
            
            const charactersData =  response.map((res) => res.data.results).reduce((acc, results) => acc.concat(results), []);
            const uniqueCharacters = new Set(charactersData.map((character:any)=> character.name));
            const uniqueCharactersData = Array.from(uniqueCharacters, name => charactersData.find((character:any)=>character.name === name));
            return uniqueCharactersData;
        } catch (err:any) {
            return rejectWithValue(err.response ? err.response.data : err.message);
        }
    }
);