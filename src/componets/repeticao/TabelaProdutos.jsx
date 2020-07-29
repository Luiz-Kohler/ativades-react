import './TabelaProdutos.css'
import React from 'react'
import Produtos from '../../Data/produtos'


function GetAllLinhas() {
    return Produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco},00</td>
            </tr>
        )
    })
}

export default () => {
    return (
        <>
            <h2 className="TituloTabela">Tabela de produtos</h2>
            <table className="TabelaProdutos">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {GetAllLinhas()}
                </tbody>
            </table>
        </>
    )
}