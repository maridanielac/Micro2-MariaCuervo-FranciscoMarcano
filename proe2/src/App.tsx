import { useState } from 'react'

import appFirebase from "../src/credenciales";
import {getAuth, onAuthStateChanged  } from "firebase/auth";
const auth = getAuth(appFirebase)
import './App.css'
import LoginPage from '../src/Pages/LoginPage';
import HomePage from "../src/Pages/HomePage";

function App() {
  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase);
    }
    else {
      setUsuario(null)
    }
  })

  return(
    <div>
      { usuario ? <HomePage correoUsuario = {usuario.email}  /> : <LoginPage /> }
    </div>

  )

 
}

export default App
