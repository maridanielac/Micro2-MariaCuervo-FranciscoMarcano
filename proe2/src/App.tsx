// <<<<<<< HEAD
// import { useEffect, useState } from 'react'

// //import appFirebase from "../src/credenciales";
// //import {getAuth, onAuthStateChanged  } from "firebase/auth";
// //const auth = getAuth(appFirebase)
// import {auth} from "../src/credenciales";
// import './App.css'
// import LoginPage from '../src/Pages/LoginPage';
// import RegisterPage from '../src/Pages/RegisterPage';
// import HomePage from "../src/Pages/HomePage";
// import { AuthContextProvider, UserAuth } from './context/authContext';
// import { onAuthStateChanged } from "firebase/auth";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Show from './componentes/Show';
// import ProfilePage from './Pages/ProfilesPage'

// function App() {
//   const [user,setuser] = useState(null);

//   onAuthStateChanged(auth, (currentUser) => {
//     setuser(currentUser);
//   });
 
//   //const { usuario } = UserAuth();
//   return(
//     // <AuthContextProvider>
//     <div>
//       {/* <ProfilePage/> */}
//        { user ? <HomePage correoUsuario = {user.email}  /> : <LoginPage /> } 
//     </div>
//     // </AuthContextProvider>
    

// =======
import './App.css'
import Header from './navegacion/Header'

function App() {

  return (
    <>
      <h1>Hola</h1>
    </>
  )

 
}

export default App
