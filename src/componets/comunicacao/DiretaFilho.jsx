import React from 'react'

export default props => {
    return(
        <div style={{textAlign:"left"}}>
            <span>Nome: <strong>{props.nome}</strong> </span>
            <br/>
            <span>Idade: {props.idade} Ano(s)</span>
            <br/>
            <span>É muito burro: {props.burro ? 'Sim' : 'Não'}</span>
        </div>
    )
}