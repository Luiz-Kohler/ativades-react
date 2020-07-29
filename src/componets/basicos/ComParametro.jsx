import React from 'react'

export default function ComParametro(props){
    return(
        <React.Fragment>
            <h2>Nome do aluno : {props.nome}</h2>
            <h3>Nota do aluno : {props.nota}</h3>
            <h3>Situação : {props.situacao}</h3>
        </React.Fragment>
    )
}