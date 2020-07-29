import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho.jsx'

export default props => {

    const [getNome, setNome] = useState('?');
    const [getIdade, setIdade] = useState('?');
    const [getBurro, setBurro] = useState();

    function FornecerInformacoes(nome, idade, burro){
        setNome(nome)
        setIdade(idade)
        setBurro(burro)
    }

    return(
        <div style={{textAlign:"left"}}>
            <span>Nome: <strong>{getNome}</strong></span>
            <br/>
            <span>Idade: <strong>{getIdade}</strong></span>
            <br/>
            <span>Burro : <strong>{getBurro ? 'Sim' : 'Não'}</strong></span>
            <IndiretaFilho onClick={FornecerInformacoes}/>
        </div>
    )
}