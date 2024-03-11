
import { Link } from 'react-router-dom';
import "./HPage.css"

const HomePage = () => {
        
        
        return (
            
            <>
            
            <section id="header">
                <section id="header-container">
                    <h1 className="header-title">Mi Aplicación Genial</h1>
                    <section id="header-nav">
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
                    </section>
                </section>
            </section>
            </>
        )    
    };
    
export default HomePage;