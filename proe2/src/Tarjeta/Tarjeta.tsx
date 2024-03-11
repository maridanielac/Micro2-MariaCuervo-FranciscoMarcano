import { Games } from '../models/games';
import { Usuario } from '../models/usuario';
import styles from './Tarjeta.module.css';

interface Props {
    usuario: Usuario;
    games: Games[]; // Cambiar el tipo para reflejar una lista de juegos
}


export default function Tarjeta({ usuario, games }: Props) {
return (
    <section className={styles.tarjeta}>
        <h2 className={styles.icono}>{usuario.ID}</h2>
        <h2>{usuario.nombre}</h2>
        <h3>{usuario.descripcion}</h3>
        <h3>Lista de Juegos</h3>
        
        <footer>
            <h3>
                {games.map((game) => {
                    const isClubGame = usuario.videojuegos.includes(game.ID);
                    if (isClubGame) {
                        return (
                            <span
                                key={game.ID}
                            >
                                <div>{game.ID}</div>
                                
                                {game.titulo}
                                {game.genero}
                                {game.descripcion}
                                
                            </span>
                        );
                    }
                    return null;
                })}
            </h3>
        </footer>
        
    </section>
)
}
