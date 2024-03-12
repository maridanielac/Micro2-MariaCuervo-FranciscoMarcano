
import { Link } from 'react-router-dom';
import "./HPage.css"

const HomePage = () => {
        
        
        return (
            
            <>
            
            <div style={{ display: 'flex', textAlign: 'right', position: 'fixed', top: 20, left: 'auto', right: 0, background: '#fff', zIndex: 999 }}>
            
                        
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
            
            </div>
            
            </>
        )    
    };
    
export default HomePage;