import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getClubs(){
    const clubCollection = collection(db, 'Clubs');
    const clubsDocs = await getDocs(clubCollection);
    const clubs = clubsDocs.docs.map((doc) => {
        return {id: doc.id, ...doc.data()};
    });
    
    return clubs;
}