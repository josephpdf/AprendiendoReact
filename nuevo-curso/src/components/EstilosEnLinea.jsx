import React, {Component} from "react";

class EstilosEnLinea extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const titulo={
            textAlign: 'center',
            color: 'green',
            backgroundColor: 'orangered'
        }
        return (
            <>
            <h1 style={titulo}>Estilos en Línea</h1>
            </>
        );
    }
}
 
export default EstilosEnLinea;