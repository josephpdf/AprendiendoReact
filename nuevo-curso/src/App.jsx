import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import Props from './components/Props';
import State from './components/State';
import EstilosTradicionales from './components/EstilosTradicionales';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
          <PrimerComponente/>
          <Props nombre="Joseph"/>
          <State/>
          <EstilosTradicionales/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
