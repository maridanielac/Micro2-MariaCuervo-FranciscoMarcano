import React,  { useState } from "react";
import image from "../assets/react.svg"

import appFirebase from "../../src/credenciales";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
const auth = getAuth(appFirebase)

const LoginPage = () => {
    const [registrando, setRegistrando] = useState(false)   

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;

        if (registrando) {
            await createUserWithEmailAndPassword(auth, correo, password)
        }
        else {
            signInWithEmailAndPassword(auth, correo, password)
        }
       
    }
    
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow">
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="ingreser email" id="email" />
                                <input type="password" placeholder="ingresar contraseña" id="password" />
                                <button className="btnform">{registrando ? "Registrate" : "Iniciar sesion"}</button>
                            </form>
                            <h4>{registrando ? "Ya tienes cuenta"  : "No tienes cuenta"} <button className="btnswitch" onClick={() => {setRegistrando(!registrando)}}>{registrando ? "Iniciar sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-8">
                   <img src={image}  />
                </div>
            </div>
        </div>
    )    
};

export default LoginPage;

function userState(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
