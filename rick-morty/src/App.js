import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async() => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
       
    setCharacters(characterApi.results);
  };

  console.log(characters);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
        <button onClick={reqApi} calassName="btn-search">
          Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;
