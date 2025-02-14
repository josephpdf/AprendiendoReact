import React, {Component} from "react";
import styled, {keyframes} from 'styled-components'
import './variables.css'

class EstilosConStyled extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const fondoTexto={
            color: 'black'
        }

        const animaTexto=keyframes`
            from{
                color: green;
            }
            to{
                color: red;
            }
        `

        const Titulo=styled.h1`
            color: withe;
            font-size: 62px;
        `
        const Encapsulado=styled.div`
            height: var(--altoDiv);
            background-color: var(--colorDiv);
            width: var(--anchoDiv);
            background-color: ${fondoTexto.color};

            &:hover{
                color: orangered;
            }

            @media (min-width: 800px) {
                color: transparent;
            }

            animation:${animaTexto} 1s linear infinite;
        `

        return (
            <>
            <Encapsulado>
                <Titulo>Styled Components</Titulo>
            </Encapsulado>
            </>
        );
    }
}

export default EstilosConStyled;