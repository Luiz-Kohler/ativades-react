import React from 'react'

export default (props) => {

    const isPar = props.numero % 2 === 0;

    const customSpan = (text) => <span>{text}</span>

    return (
        <div>
            {isPar ? customSpan("Par") : customSpan("Impar")}
        </div>
    )
}