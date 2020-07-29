import React from 'react'

export default props => {

    const gerarIdade = (min, max) =>  Math.floor(Math.random() * max + min)
    const isBurro = gerarIdade(0, 10) >  5;
    return(
        <div>
            <button onClick={ function(event) {
                    props.onClick('joão', gerarIdade(1,100) , isBurro)
            }}>Enviar informações</button>
        </div>
    )
}