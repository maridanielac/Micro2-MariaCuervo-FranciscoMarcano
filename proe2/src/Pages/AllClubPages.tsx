import React, { useEffect, useState } from 'react';

export default function AllClubPages({nombre, descripcion, videojuegos}) {
    
    return (
        <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>{videojuegos}</p>
        </div>
    )
}