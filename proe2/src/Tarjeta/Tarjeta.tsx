import { Usuario } from '../assets/models/usuario';
import styles from './Tarjeta.module.css';


import { Link } from 'react-router-dom';

interface Props{
    usuario: Usuario, 
}


export default function Tarjeta({usuario}: Props){
    return(
        <section className={styles.tarjeta}>
            <h2 className={styles.icono}>{usuario.ID}</h2>
            <h2>{usuario.nombre}</h2>
            <h3>{usuario.descripcion}</h3>
            <Link to="/clubs:id">
                VerVideojuegos
            </Link>
        </section>
    )
}
