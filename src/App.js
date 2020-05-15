import React, { useState, useEffect } from 'react';
import './App.css';
import api from '../src/services/api';

function App() {

  const [planets, setPlanets] = useState({});

  useEffect(() => {
    getPlanet()
  }, []);

  function getPlanet(){
    let numberPlanet = Math.floor(Math.random() * 60);   
    api.get('planets/' + numberPlanet)
    .then(response =>{
        setPlanets(response.data);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://latelierdudoc.com/wp-content/uploads/2019/05/star_wars_logo_PNG43.png"} className="title-logo" />
        <img src={"https://i.pinimg.com/originals/bd/d8/40/bdd840e473f48a367e04eb0129d2af01.png"} className="App-logo" alt="logo" />

        <ul>
          <li>
            <p><strong>Name: </strong>{planets.name}</p>   
            <p><strong>Climate: </strong>{planets.climate}</p>   
            <p><strong>Diameter: </strong>{planets.diameter}</p>      
            <p><strong>Population: </strong>{planets.population}</p>     
            <button onClick={() => getPlanet()} type="button">next
            </button>             
          </li>        
        </ul>
        
      </header>      
    </div>
  );
}

export default App;
