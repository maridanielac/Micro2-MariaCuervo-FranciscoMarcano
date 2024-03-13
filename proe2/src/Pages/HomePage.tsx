import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {auth} from "../../src/credenciales";
import {getAuth, signOut  } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import "./HPage.css"

const HomePage = () => {
        
    const [user,setuser] = useState(null);

   onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
   });
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
                        <Link to="/profile" className="header-button">
                            Perfil
                        </Link>
            
                        <button className="header-button" onClick={() => signOut(auth)} >Logout</button>
            </div>
            <div>
            {user ? "Bienvenido " : ""}
            {user ? user.email : ""}
            </div>
            </>
        )    
    };
    
export default HomePage;