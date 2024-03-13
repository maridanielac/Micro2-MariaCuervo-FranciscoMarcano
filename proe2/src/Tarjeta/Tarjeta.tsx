import { Games } from '../models/games';
import { Club } from '../models/usuario';
import styles from './Tarjeta.module.css';

interface Props {
    clubs: Club;
    games: Games[]; // Cambiar el tipo para reflejar una lista de juegos
}


export default function Tarjeta({ clubs: clubs, games }: Props) {
return (
    <article className={styles.tarjeta}>    
        <h2 className={styles.icono}>{clubs.ID}</h2>
        <h2 className={styles.badge}>{clubs.nombre}</h2>
        <h3 className={styles.badge}>{clubs.descripcion}</h3>
        <section>
        <h4 id={styles.tarjeta} >Lista de Juegos</h4>
        </section>
        
        <footer>
            <h3>
                {games.map((game) => {
                    const isClubGame = clubs.videojuegos.includes(game.ID);
                    if (isClubGame) {
                        return (
                            <span
                                key={game.ID}
                                className={styles.badge}
                                style={{backgroundColor: 'skyblue', color: 'white', alignContent: 'center', marginTop: '20px'}}
                                >
                                
                                {game.titulo}
                                
                            </span>
                        );
                    }
                    return null;
                })}
            </h3>
            <button style={{ display: 'block', margin: '0 auto' }}>Solicitar Membresia</button>
        </footer>
        
    </article>
)
}
