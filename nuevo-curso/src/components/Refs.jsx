import React, {createRef} from 'react'

const Refs = () => {
    const cambioColor=createRef();

    const cambioColorTexto=()=>{
        cambioColor.current.style.color='blue'
    }
  return (
    <>
    <h1 ref={cambioColor}>Soy un título en Ref y cambio de color</h1>
    <button onClick={cambioColorTexto}>Cambia color</button>
    </>
  )
}

export default Refs