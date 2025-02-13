import React, {Component} from "react";
import styles from './EstilosEnModulo.module.css'


class EstilosENModulo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <>
            <h1 className={styles.titulo}>Estilos en módulo</h1>
            </>
        );
    }
}
 
export default EstilosENModulo;