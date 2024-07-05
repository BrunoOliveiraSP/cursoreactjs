import './index.scss'

import { useState } from 'react'

export default function Contador(props) {
    const [contador, setContador] = useState(0);

    function aumentar() {
        if (contador < (props.fim ?? 10)) {
            setContador(contador + 1)
        }
    }

    function diminuir() {
        if (contador > (props.inicio ?? 0)) {
            setContador(contador - 1);
        }
    }

    return (
        <div className='comp-contador'>
            <h1> {props.titulo} </h1>

            <div className='cont'>
                <button onClick={aumentar}> + </button>
                {contador}
                <button onClick={diminuir}> - </button>
            </div>
        </div>
    )
}