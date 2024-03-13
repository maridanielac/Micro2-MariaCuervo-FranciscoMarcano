import { useLocation, useParams } from 'react-router-dom';
import "./ProductDetail.css"
import { Club } from '../models/clubs';

function ClubDetail() {
  const { ID } = useParams();
  const location = useLocation();
  const { clubs } = location.state;

  const clubss = clubs.find((user: Club) => user.id === parseInt(ID || "", 10));

  if (!clubss) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <div id='title'>DETALLES DEL PRODUCTO</div>
      <div className='details'>
      <div id='info'>
            <p>ID del producto: {clubss.id}</p>
            <p>Nombre: {clubss.name}</p>
        </div>
      </div>
    </div>
  );
}

export default ClubDetail;