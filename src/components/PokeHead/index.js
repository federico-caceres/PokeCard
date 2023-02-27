import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import './PokeHead.css';

export default function PokeHead({searchPokemon}){

    return (
        <Row>
            <Col sm={12} md={4} className="d-flex justify-content-center align-items-center">
                <h1><Badge bg="primary">PokeCard</Badge></h1>
            </Col>
            <Col sm={12} md={8} className="d-flex justify-content-center align-items-center">
                <input className="search" placeholder='Ingresa el nombre del Pokémon a buscar' onChange={searchPokemon}></input>
            </Col>
        </Row>
    )
}