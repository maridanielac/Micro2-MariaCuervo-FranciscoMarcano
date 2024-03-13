import { useContext, createContext, useEffect, useState } from "react";
import { 
    GoogleAuthProvider, 
    signInWithRedirect,
    signOut,
    onAuthStateChanged  
 } from "firebase/auth";

 import {auth} from "../credenciales"

 const AuthContext = createContext();
 export const AuthContextProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const googleSingIn=() => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const logOut=() => {
        signOut(auth);
    };
    useEffect(() => {   
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUsuario(currentUser);
        }) 
        return ()=> { 
            unsubscribe(); 
        }
    }, []);
    return (
        <AuthContext.Provider value={{googleSingIn, logOut, usuario}}>
            {children}
        </AuthContext.Provider>
    )
 }
 export const UserAuth = () => {
    return useContext(AuthContext);
 }