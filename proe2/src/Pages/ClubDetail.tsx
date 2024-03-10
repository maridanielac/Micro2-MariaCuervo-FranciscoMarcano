import { useLocation, useParams } from 'react-router-dom';
import "./ProductDetail.css"
import { Usuario } from '../models/usuario';

function ClubDetail() {
  const { ID } = useParams();
  const location = useLocation();
  const { Usuario } = location.state;

  const usuarios = Usuario.find((user: Usuario) => user.id === parseInt(ID || "", 10));

  if (!usuarios) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <div id='title'>DETALLES DEL PRODUCTO</div>
      <div className='details'>
      <div id='info'>
            <p>ID del producto: {usuarios.id}</p>
            <p>Nombre: {usuarios.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;