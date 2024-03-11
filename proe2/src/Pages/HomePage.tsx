
import { Link } from 'react-router-dom';
import "./HPage.css"

const HomePage = () => {
        
    
        return (
            <div id="header">
            <div id="header-container">
                <h1 id="header-title">Mi Aplicación Genial</h1>
                <nav id="header-nav">
                    <Link to="/clubs" className="header-button">
                        Ver Clubs
                    </Link>
                    <Link to="/games" className="header-button">
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