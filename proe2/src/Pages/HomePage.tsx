
import { Link } from 'react-router-dom';
import Header from '../navegacion/Header';

const HomePage = () => {
        
    
        return (
            <div className="header">
            <div className="header-container">
                <h1 className="header-title">Mi Aplicación Genial</h1>
                <nav className="header-nav">
                    <Link to="/clubs" className="header-link">
                        Ver Clubs
                    </Link>
                    <Link to="/games" className="header-link">
                        Buscador de Juegos
                    </Link>
                    <Link to="/login" className="header-button">
                        Iniciar Sesión
                    </Link>
                    <Link to="/register" className="header-button">
                        Registrarse
                    </Link>
                </nav>
            </div>
        </div>
        )    
    };
    
export default HomePage;