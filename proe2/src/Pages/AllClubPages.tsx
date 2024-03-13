export default function AllClubPages({nombre, descripcion, videojuegos}: {nombre: string, descripcion: string, videojuegos: string}) {
    
    return (
        <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>{videojuegos}</p>
        </div>
    )
}