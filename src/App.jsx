import './App.css'
import React from 'react'

import PrimeiroComponente from './componets/basicos/Primeiro.jsx'
import ComParamentro from './componets/basicos/ComParametro.jsx'
import NumeroAleatorio from './componets/basicos/NumeroAleatorio.jsx'
import Card from './componets/layout/Card.jsx'
import Familia from './componets/basicos/Familia.jsx'
import FamiliaMembro from './componets/basicos/FamiliaMembro.jsx'
import ListaAlunos from './componets/repeticao/ListaAlunos.jsx'
import TabelaProdutos from './componets/repeticao/TabelaProdutos.jsx'
import ParOuImpar from './componets/condicional/ParOuImpar.jsx'
import UsuarioInfo from './componets/condicional/UsuarioInfo.jsx'
import DiretaPai from './componets/comunicacao/DiretaPai.jsx'
import IndiretaPai from './componets/comunicacao/IndiretaPai.jsx'
import Input from './componets/formulario/Input.jsx'
import Contador from './componets/contador/contador.jsx'
import Mega from './componets/mega/Mega.jsx'

export default () =>
    <div className="App">
        <h1>Fundamentos React - Udemy</h1>

        <div className="Cards">

            <Card titulo ="13 - Desafio de megasena " color = "#35a79c">
                <Mega quantidade = {7}/>
            </Card>

            <Card titulo ="12 - Contador " color = "#fe8a71">
                <Contador numeroInicial={1}/>
            </Card>

            <Card titulo ="11 - Componente controlado (Input) " color = "#343d46">
                <Input/>
            </Card>

             <Card titulo ="10 - Comunicação indireta" color = "#003049">
                <IndiretaPai/>
            </Card>

            <Card titulo ="9 - Comunicação direta" color = "#0b0014">
                <DiretaPai/>
            </Card>

            <Card titulo ="8 - Renderização condicional pt. 2" color = "#4a91f2">
                <UsuarioInfo usuario={{nome: 'Luiz Felipe'}}/>
                <UsuarioInfo/>
            </Card>

            <Card titulo ="7 - Par ou impar - Renderização condicional" color = "#fed766">
                <ParOuImpar numero={1}/>
            </Card>

            <Card titulo = "6 - Tabela de produtos - Desafio" color = "#851e3e">
                <TabelaProdutos/>
            </Card>

            <Card titulo = "5 - Repetição" color  = "#f6abb6">
                <ListaAlunos></ListaAlunos>
            </Card>
    
            <Card titulo="4 - Componentes com filhos" color="#fe4a49">

                <Familia sobrenome="Santos">
                    <FamiliaMembro nome="Felipe" />
                    <FamiliaMembro nome="Luiz" />
                </Familia>

            </Card>

            <Card titulo="3 - Desafio numero aletorio" color="#090">
                <NumeroAleatorio min={1} max={5} />
            </Card>

            <Card titulo="2 - Com parametro" color="">
                <ComParamentro nome="Luiz" nota="8.5" situacao="Aprovado" />
            </Card>

            <Card titulo="1 - Primeiro componente" color="#009">
                <PrimeiroComponente />
            </Card>

        </div>
    </div>
