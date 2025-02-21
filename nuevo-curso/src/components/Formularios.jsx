import React, { useState } from 'react'

const Formularios = () => {
    const [nombre, setNombre] = useState(false)
    const [apellido, setApellido] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)

    const nombreRegex = /^[a-zA-Z]{3,16}$/
    const apellidoRegex = /^[a-zA-Z]{3,16}$/
    const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-z0-9]{2,30}[.][a-zA-Z]{2,4}$/
    const passwordRegex = /^[a-zA-Z0-p_-]{6,18}$/

    const valorNombre = (nombreValidar) =>{
        if(nombreValidar.trim()){
            if(nombreRegex.test(nombreValidar)){
                setNombre(true)
            }
        }
    }

    const valorApellido = (apellidoValidar) =>{
        if(apellidoValidar.trim()){
            if(apellidoRegex.test(apellidoValidar)){
                setApellido(true)
            }
        }
    }

    const valorEmail = (emailValidar) =>{
        if(emailValidar.trim()){
            if(emailRegex.test(emailValidar)){
                setEmail(true)
            }
        }
    }

    const valorPassword = (passwordValidar) =>{
        if(passwordValidar.trim()){
            if(passwordRegex.test(passwordValidar)){
                setPassword(true)
            }
        }
    }

    const enviar=(e)=>{
        e.preventDefault()
        if(nombre === true && apellido === true && email === true && password === true){
            console.log("Datos validos")
        } else {
            console.log("Ingrese valores")
        }
        setTimeout(()=>{
            window.location.reload()
        },5000)
    }

  return (
    <>
    <form onSubmit={e=>enviar(e)}>
        <h3>Escribe nombre: </h3> 
        <input type="text" onChange={e=>valorNombre(e.target.value)}/>
        <h3>Escribe apellido: </h3> 
        <input type="text" onChange={e=>valorApellido(e.target.value)}/>
        <h3>Escribe email: </h3> 
        <input type="email" onChange={e=>valorEmail(e.target.value)}/>
        <h3>Escribe contraseña: </h3> 
        <input type="password" onChange={e=>valorPassword(e.target.value)}/>
        <input type='submit'/>
    </form>
    </>
  )
}

export default Formularios