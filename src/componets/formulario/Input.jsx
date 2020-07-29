import React, {useState} from 'react'

export default (props) => {

    const [getValor, SetValor] = useState('');

    function quandoMudar(e){
        SetValor(e.target.value)
    }

    return(
        <div>
            <span>Valor do input:  {getValor}</span>
            <br/>
            <input value={getValor} type="text" onChange={quandoMudar} maxLength={15}/>
            <br/>
            <input value={getValor}  readOnly/>
        </div>
    )
}