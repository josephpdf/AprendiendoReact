import React, {Component} from "react";

class Props extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
            <h1>Estoy en Props</h1>
            <h2>Mi nombre es: {this.props.nombre}</h2>
            </>
        );
    }
}
 
export default Props;