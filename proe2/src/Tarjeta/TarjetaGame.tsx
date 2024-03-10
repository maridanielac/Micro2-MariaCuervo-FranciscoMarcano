import { Games } from '../models/games';
import styles from './Tarjeta.module.css';


import { Link } from 'react-router-dom';

interface Props{
    games: Games, 
}


export default function Tarjeta({games}: Props){
    return(
        <section className={styles.tarjeta}>
            <h2 className={styles.icono}>{games.ID}</h2>
            <h2>{games.titulo}</h2>
            <h3>{games.genero}</h3>
            <h3>{games.descripcion}</h3>
            <Link to="/clubs:id">
                VerVideojuegos
            </Link>
            
        </section>
    )
}
