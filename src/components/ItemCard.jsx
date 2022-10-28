import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from './img/Jarro mug de porcelana Blue Matte - Set x 4/376908-800-auto.jpg'

export const ItemCard = () => {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}
