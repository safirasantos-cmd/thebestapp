import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './cardcuteeevee.css';

function Card() {   
const [pokemons, setPokemons] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

useEffect (() => {
  const getData = async () => {
    try{
      const res = await
     axios.get('https://pokeapi.co/api/v2/pokemon/eevee');
      setPokemons(res.data);
      console.log('Sucesso: ', res.data);
      setLoading(false);
      
    }
    catch (err) {
      console.error(" Erro ao carregar API", err);
      setLoading(false)
      setError(true)
    }
  };
  getData(); 
}, {});


   if (loading) return
   <div
   className="loader"> Carregando Pokemonlex</div>

   if (error) return <div 
   className="error"> Ocorreu um erro inesperado</div>;

return(
  <div>teste3</div>
//   <div className="card">
//    <h1> Poke Card</h1> 
//      <div className="pokemon-container">
//         <div className="pokemon-card">
//           <h3>{pokemons.name}</h3>
//           <img src={pokemons.sprites.front_default} alt={pokemons.name} />
//           <h3>{pokemons.stats[0].stat.name + ' ' + 
// pokemons.stats[0].base_stat + pokemons.stats[1].stat.name + ' ' +
// pokemons.stats[0].base_stat }</h3>
//              </div>
//          </div>
//     </div>
  );
 
}

export default Card;
