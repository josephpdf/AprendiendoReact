import React, {Component} from 'react'

class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        nombre: 'María Fernanda',
        apellido: 'Chaves',
        evento: null
    }
    cambiarNombre(){
        this.setState({nombre: 'Joseph'})
    }
    componentDidMount(){
        this.state.evento=window.addEventListener('resize', ()=>{
            console.log(window.innerWidth)
        })
    }
    componentDidUpdate (preProps, preState){
        if(preState === this.state.nombre) {
            console.log('Mi estado no ha cambiado')  
        } else {
            console.log('Mi estado ha cambiado ahora me llamo: ', this.state.nombre)
        }
    }
    componentWillUnmount(){
        window.removeEventListener(this.state.evento)
    }
    render() { 
        return (
            <>
            <h1>{this.state.nombre}</h1>
            <button onClick={this.cambiarNombre.bind(this)}>Cambiar nombre</button>
            </>
        );
    }
}
 
export default CicloVidaComponentes;