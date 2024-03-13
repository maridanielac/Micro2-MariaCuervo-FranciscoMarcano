import React,  { useState } from "react";
import imageGoogle from "../assets/google.png"

import {auth} from "../../src/credenciales";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect  } from "firebase/auth";


const RegisterPage = () => {
    const [registrando, setRegistrando] = useState(false)   

    const functAutenticacion = async(e) => {
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

    const autenticationGoogle = async() => {
       
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider);
          
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
                            {/* <button ><img src={imageGoogle}></img> <span>Iniciar con Google</span></button> */}
                            {/* <h4>{registrando ? "Ya tienes cuenta"  : "No tienes cuenta"} <button className="btnswitch" onClick={() => {setRegistrando(!registrando)}}>{registrando ? "Iniciar sesion" : "Registrate"}</button></h4> */}
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )    
};

export default RegisterPage;