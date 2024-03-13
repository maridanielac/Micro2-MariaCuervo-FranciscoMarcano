import React, { useEffect, useState } from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import { getClubs } from './club';

function AllClubPages() {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        async function fetchClubs() {
            try {
                const fetchedClubs = await getClubs();
                setClubs(fetchedClubs);
            } catch (error) {
                console.error('Error fetching clubs:', error);
            }
        }
        fetchClubs();
    }, []);

    return (
        <>
            <section style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}>
                {/* Now clubs is an array, use map to iterate */}
                {clubs.map((club) => (
                    <Tarjeta
                        key={club.id}
                        club={club}
                    />
                ))}
            </section>
        </>
    );
}

export default AllClubPages;
