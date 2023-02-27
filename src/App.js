import PokeCard from './components/PokeCard/';
import PokeHead from './components/PokeHead/';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react';
import {getDataCards} from './services/';
import './App.css';

function App() {

  const [pokeData, setPokeData] = useState([]);
  const [pokeDataFilter, setPokeDataFilter] = useState([]);

  useEffect(async ()=>{
    try {
      let res = await getDataCards();
      setPokeData(res);
      setPokeDataFilter(res);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const searchPokemon = (e) => {
    setPokeDataFilter(pokeData);
    if (e.target.value !== '') {
      setPokeDataFilter(
        pokeDataFilter.filter( pokeDetail =>{
          return pokeDetail.data.name.toLowerCase().includes(e.target.value.toLowerCase()) 
        })
      );
    }
  }

  return (
    <div className='principal'>
      <PokeHead searchPokemon={searchPokemon}/>
      <Row>
        {
          pokeDataFilter?.map((res)=>{
            return <PokeCard  key={res.data.name} pokeData={res.data}/>
          })
        }
      </Row>
    </div>
  );
}

export default App;
