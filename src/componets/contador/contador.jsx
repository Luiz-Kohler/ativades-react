import React from 'react'

import Display from './Display.jsx'
import Botoes from './Botoes.jsx'
import PassoForm from './PassoForm.jsx'

class Contador extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            numero : this.props.numeroInicial || 0,
            passo: this.props.passo || 0
        }
    }

    inc = () => 
        this.setState({
            numero : this.state.numero + this.state.passo,
        })

    dec = () => 
        this.setState({
            numero : this.state.numero - this.state.passo
        })

    setPasso = (novoPasso) => {
        this.setState({
            passo:novoPasso
        })
    }

    render(){
        return (
            <div>
                <h3>Contador</h3>
                <Display numero = {this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes inc={this.inc} dec={this.dec}/>
            </div>
        )
    }
}


export default Contador