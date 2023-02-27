import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './PokeCard.css';

export default function PokeCard(props){
    return (
        <Col sm={12} md={6} xl={4} xxl={3}>
            <Card style={{ width: '20rem' }} className="pokeCard mt-5 mx-auto">
                <Card.Img variant='top' src={props.pokeData.sprites.other.dream_world.front_default} style={{height: '15rem' }}/>
                <Card.Body>
                    <Card.Title>
                        {props.pokeData.name}
                    </Card.Title>
                    <Card.Text>
                        National ID: <Badge bg="secondary">{props.pokeData.id}</Badge><br></br>
                        Attack:      <Badge bg="secondary">{props.pokeData.stats[1].base_stat}</Badge><br></br>
                        Defense:     <Badge bg="secondary">{props.pokeData.stats[2].base_stat}</Badge><br></br>
                        Speed:       <Badge bg="secondary">{props.pokeData.stats[5].base_stat}</Badge><br></br>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}