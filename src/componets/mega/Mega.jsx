import React, { useState } from "react"

export default props => {

    const quantidade = props.quantidade || 6
    const [getNumeros, setNumeros]= useState(Array(quantidade).fill(0))

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }

    function gerarNumeros(qtd){
        const numeros = Array(qtd).fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 100, nums)
            return [...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)

        return numeros;
    }

    return (
        <div>
            <h2>Gerador de numero da Megasena</h2>
            <h3>{getNumeros.join(' . ')}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar Numeros</button>
        </div>
    )
}