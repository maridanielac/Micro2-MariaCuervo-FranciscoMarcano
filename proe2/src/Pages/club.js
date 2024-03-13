import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase/config';

export async function getClubs(){
    const clubsCollection = collection(db, 'clubs');
    const clubsSnapshot = await getDocs(clubsCollection);
    const clubs = clubsSnapshot.docs.map((doc) => doc.data());
    return clubs;
}

export async function getClub(id){
    const clubCollection = collection(db, 'Clubs');
    const clubsDocs = await getDocs(clubCollection);
    const clubs = clubsDocs.docs.map(doc => doc.data()).find(club => club.id === id);
    
    return clubs;
}

const querySnapshot = await getDocs(collection(db, "clubs"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});