import React from 'react'
import DiretaFilho from './DiretaFilho.jsx'

export default props => {
    return(
        <div>
            <DiretaFilho nome="Alberto" idade={1} burro={true}/>
            <br/>
            <DiretaFilho nome="Carlos" idade={17} burro={false}/>
        </div>
    )
}