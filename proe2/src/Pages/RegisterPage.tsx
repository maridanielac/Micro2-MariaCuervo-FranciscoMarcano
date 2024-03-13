import { useState } from "react";

import {auth} from "../../src/credenciales";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";


const RegisterPage = () => {
    const [registrando] = useState(false)   

    const functAutenticacion = async(e: any) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        if (registrando) {
            try {
                await createUserWithEmailAndPassword(auth, correo, password)
            } catch (error) {
                alert("El password debe tener al menos 8 caracteres");
            }
            
        }
        else {
            try {
                signInWithEmailAndPassword(auth, correo, password)
            } catch (error) {
                alert("el correo y/o password son incorrectos");
            }
            
        }
       
    }
    
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-8">
                    <div className="cuadro">
                        <div className="card card-body shadow">
                            <form onSubmit={functAutenticacion}>
                                <input type="name" placeholder="ingresar nombre" id="name" className="cajatexto"/>
                                <input type="lastname" placeholder="ingresar apellido" id="lastname" className="cajatexto"/>
                                <input type="nickname" placeholder="ingresar apodo" id="nickname" className="cajatexto"/>
                                <input type="text" placeholder="ingresar email" id="email" className="cajatexto"/>
                                <input type="password" placeholder="ingresar contraseña" id="password" className="cajatexto" />
                                <button className="btnform">Registrate</button>
                                
                            </form>
                
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )    
};

export default RegisterPage;