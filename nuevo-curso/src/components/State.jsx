import React, {Component} from "react";

class State extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        name: "Joseph",
        apellido: "Poveda"
    }

    cambiarDatos(){
        if(this.state.name==="Joseph" && this.state.apellido==="Poveda")
            this.setState({name:"Samuel", apellido:"Poveda Chaves"})
        else
            this.setState({name:"Joseph", apellido:"Poveda"})        
    }

    render() { 
        return (
            <>
            <h2>Mi nombre es: {this.state.name} {this.state.apellido}</h2>
            <button onClick={this.cambiarDatos.bind(this)}>PULSAR</button>
            </>
        );
    }
}
 
export default State;