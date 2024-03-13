
import { Link } from 'react-router-dom';

import {auth} from "../../src/credenciales";
import {getAuth, signOut  } from "firebase/auth";
//const auth = getAuth(appFirebase)

// const HomePage = ({correoUsuario}) => {
    
//         return (
//             <div>
//                 <h1>Hello</h1>
//                 <h4>{correoUsuario}<button className='btn btn-primary' onClick={() => signOut(auth)} >Logout</button></h4>
//                 {/* <Link to="/clubs">
//                     Ver Clubs
//                 </Link> */}
// =======
import "./HPage.css"

const HomePage = ({correoUsuario}) => {
        
        
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
            <h4>{correoUsuario}<button className='btn btn-primary' onClick={() => signOut(auth)} >Logout</button></h4>
            </>
        )    
    };
    
export default HomePage;