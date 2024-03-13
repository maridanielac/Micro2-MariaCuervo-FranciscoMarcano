import React,  { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageGoogle from "../assets/google.png"
import {auth} from "../../src/credenciales";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect  } from "firebase/auth";
import { Link,Navigate } from "react-router-dom";
import '../App.css'


const LoginPage = () => {

    const navigate = useNavigate();

    const functAutenticacion = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
    
        try {
            await signInWithEmailAndPassword(auth, correo, password)
            navigate("/")
        } catch (error) {
            alert("el correo y/o password son incorrectos");
        }
       
    }

    const autenticationGoogle = async() => {
       
            const provider = new GoogleAuthProvider();
            await signInWithRedirect(auth, provider);
          
    }
    
    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-10">
                    <div className="cuadro">
                        <div className="card card-body shadow">
                            <form onSubmit={functAutenticacion}>
                                <input type="text" placeholder="ingresar email" id="email" className="cajatexto"/>
                                <input type="password" placeholder="ingresar contraseña" id="password" className="cajatexto"/>
                                <button className="btnform"> Iniciar sesion</button>
                                
                            </form>
                            {/* <button ><img src={imageGoogle}></img> <span>Iniciar con Google</span></button> */}
                            <h4>{"No tienes cuenta"} 
                            <Link to="/register" className="header-button">
                            <button  className="header-button" >Registrate</button>
                            </Link>
                            
                            </h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )    
};

export default LoginPage;


