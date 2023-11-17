import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta(amigos) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={amigos.imagen} style={{ width: '120px', height: 'auto' }} alt={amigos.imagen} />
      <Card.Body>
        <Card.Title>Amigo: {amigos.nombre}</Card.Title>
        <Card.Text>
          Teléfono: {amigos.telefono}
        </Card.Text>
        <Card.Text>
          id: {amigos.id}
        </Card.Text>
        <Button variant="primary">Llamar</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;