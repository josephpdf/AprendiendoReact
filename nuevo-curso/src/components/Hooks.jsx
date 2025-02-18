import React, {useEffect, useState} from 'react'

const Hooks = () => {
    const [color, setColor] = useState('red')

    const [contador, setContador] = useState(0)

    useEffect(()=>{
        let intervalo=setInterval(()=>{setContador(contador + 1)},1000)
        return() => {
            clearInterval(intervalo)
        }

    },[contador])

    const fondo={
        width: '100%',
        height: '500px',
        backgroundColor: color
    }

    const cambioColor=() => {
        if(color === 'red')
            setColor('green')
        if(color === 'green')
            setColor('red')
    }

  return (
    <>
    <div style={fondo} className='container'>
        <button onClick={cambioColor}>Cambiar color de fondo</button>
        <h1>Contador: {contador}</h1>
    </div>
    </>
  )
}

export default Hooks