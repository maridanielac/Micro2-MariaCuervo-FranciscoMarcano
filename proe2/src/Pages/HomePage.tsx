
import { Link } from 'react-router-dom';
import appFirebase from "../../src/credenciales";
import {getAuth, signOut  } from "firebase/auth";
const auth = getAuth(appFirebase)

const HomePage = ({correoUsuario}) => {
        
    
        return (
            <div>
                <h1>Hello</h1>
                <h4>{correoUsuario}<button className='btn btn-primary' onClick={() => signOut(auth)} >Logout</button></h4>
                {/* <Link to="/clubs">
                    Ver Clubs
                </Link> */}
            </div>
        )    
    };
    
export default HomePage;