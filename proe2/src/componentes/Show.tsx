import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../credenciales";

const Show = () => {

    const [profiles, setProfiles] = useState([])
    const profilesCollection = collection(db,"profiles")

    const getProfiles = async() => {
        const data = await getDocs(profilesCollection)
        console.log(data.docs)

         setProfiles (
              data.docs.map((doc) => ({...doc.data(), id:doc.id}))
          )
    }

    useEffect(() => {
        getProfiles();
    }, []);

    return(
       <div>
        {profiles.map((profile) => {
                return (
                    <div id={profile.id}>
                        <h1>Name: {profile.nombre}</h1>
                        <h1>apellido: {profile.apellido}</h1>
                        <h1>username: {profile.username}</h1>
                        <h1>email: {profile.email}</h1>
                        <h1>videojuego_preferido: {profile.videojuego_preferido}</h1>
                        <h1>membresia: {profile.membresia}</h1>


                    </div>
                    
                );
            })
        }
        </div>
      
        
    )

};

export default Show