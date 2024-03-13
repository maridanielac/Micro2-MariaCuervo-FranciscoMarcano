import {useState, useEffect} from 'react';
import {AllClubPages} from './AllClubPages';

export function useClubs(){
    const [clubs, setClubs] = useState(null);
    
    useEffect(() => {
        async function loadclubs(){
            const clubs = await loadclubs();
            setClubs(clubs);
        }
        loadclubs();
    }, []);
    const isLoading = clubs === null;
    return {clubs, isLoading};
}