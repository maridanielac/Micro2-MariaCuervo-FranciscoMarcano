import { useState, useEffect } from "react";

import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../credenciales";

const ProfilePage = () => {
    const [nombre, setNombre] = useState("")
    //const [apellido] = useState("test")
    const [profiles, setProfiles] = useState([])
    const profilesCollection = collection(db,"profiles")

    const getProfiles = async() => {
        const data = await getDocs(profilesCollection)

          setProfiles (
               data.docs.map((doc) => ({...doc.data(), id:doc.id}))
           )
    }

    const guardar = async (id: any) => {
        const profileDoc = doc(db,"profiles", id)
        const newProfile = {nombre: nombre};
        await updateDoc(profileDoc, newProfile)

    }

    useEffect(() => {
        getProfiles();
    }, []);
    
    return (
        <div className="container">
        {profiles.map((profile: any) => {
                
                return (
                    <div className="row">
                        <div className="col-md-10">
                        <div className="cuadro">
                        <div className="card card-body shadow">
                        <div id={profile.id}>
                            
                            <input type="text" placeholder="ingresar nombre" id="name" className="cajatexto" value={profile.nombre} onChange={(event) => {setNombre(event.target.value)}} />
                            <input type="text" placeholder="ingresar apellido" id="lastname" className="cajatexto" value={profile.apellido} />
                            <input type="text" placeholder="ingresar apodo" id="nickname" className="cajatexto"  value={profile.username} />
                            <input type="text" placeholder="ingresar email" id="email" className="cajatexto" value={profile.email} />
                            <input type="text" placeholder="indique su videojuego favorito" id="viedeojuegos" className="cajatexto" value={profile.videojuego_preferido} />
                            <input type="text" placeholder="indique su membresia" id="membresia" className="cajatexto" value={profile.membresia} />
                            <button className="btnform" onClick={() => { guardar(profile.id)}}>Guardar</button>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                    </div>
                );
            })
        }           
        </div>
    )    
};

export default ProfilePage;