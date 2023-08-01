import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getCharacters } from 'app/rickandmorty/store/characters.actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store';
import { charactersSelectors } from './store/characters.selectors';

function HomeLayout() {
    const dispatch: AppDispatch = useDispatch();
    const characters = useSelector(charactersSelectors)
    const [selectedCharacter, setSelectedCharacter] = useState('');
    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);
    const handleCharacterChange = (event: SelectChangeEvent) => {
        setSelectedCharacter(event.target.value);
    };
    useEffect(() => {
        if (characters.length > 0) {
            setSelectedCharacter(characters[0].name);
        }
    }, [characters]);
    
    const characterOptions = characters.map((character) => (
        <MenuItem key={character.id} value={character.name}>
            {character.name}
        </MenuItem>
    ));

    return (
        <div>
            <Select value={selectedCharacter} onChange={handleCharacterChange}>
                {characterOptions}
            </Select>
        </div>
    );
}
export default HomeLayout;