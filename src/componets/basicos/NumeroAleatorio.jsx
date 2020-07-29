import React from 'react';

const numAleatorio = (min, max) =>  Math.floor(Math.random() * max + min)


export default (props) => {

    const {min, max} = props
    let numeroAleatorio = numAleatorio(min, max);

    return (
        <>
            <strong>Valor minimo: {props.min}</strong>
            <br />
            <strong>Valor maximo: {props.max}</strong>
            <br />
            <h3>Numero Aleatorio Gerado : {numeroAleatorio}</h3>
        </>
    )
}

