import { useState, useEffect } from "react";

export default function Welcome(props) {
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);
  const { message, name } = props;

  useEffect(() => {
    console.log(semaforo);
  }, [semaforo]);
  
  const contar = () => {
    setCounter(counter + 1);
    setSemaforo(!semaforo);
  }

  return (
    <div>
      <h1>Hola, {name}</h1>
      <h2>Contador de react con Hooks</h2>
      <h4>El número del contador es: {counter}</h4>
      <p>El semáforo está en color {semaforo ? "red" : "green"}</p>
      <button type="submit" onClick={(contar)}>
        Sumar contador
      </button>
      <p>{message}</p>
    </div>
  );
}
