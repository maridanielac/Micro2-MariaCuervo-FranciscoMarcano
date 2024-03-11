import { Games } from '../models/games';
import { Usuario } from '../models/usuario';
import styles from './Tarjeta.module.css';

interface Props {
    usuario: Usuario;
    games: Games[]; // Cambiar el tipo para reflejar una lista de juegos
}


export default function Tarjeta({ usuario, games }: Props) {
return (
    <article className={styles.tarjeta}>    
        <h2 className={styles.icono}>{usuario.ID}</h2>
        <h2 className={styles.badge}>{usuario.nombre}</h2>
        <h3 className={styles.badge}>{usuario.descripcion}</h3>
        <section>
        <h4 id={styles.tarjeta} >Lista de Juegos</h4>
        </section>
        
        <footer>
            <h3>
                {games.map((game) => {
                    const isClubGame = usuario.videojuegos.includes(game.ID);
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
        </footer>
        
    </article>
)
}
