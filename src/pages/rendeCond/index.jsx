import './index.scss'
import { useState } from 'react'

import Cabecalho from '../../components/cabecalho'


export default function RenderizacaoCondicional() {
    const [exibirBiscoitoSorte, setExibirBiscoitoSorte] = useState(false);

    function abrirFecharBiscoitoSorte() {
        setExibirBiscoitoSorte(!exibirBiscoitoSorte);
    }


    return (
        <div className='pagina-rende-cond pagina'>
            <Cabecalho titulo="ReactJS | Renderização Condicional" />

            <div className='secao'>
                <h1> Biscoito da Sorte </h1>
                <button onClick={abrirFecharBiscoitoSorte}>
                    {exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'}
                </button>

                {exibirBiscoitoSorte == true &&
                    <p className='msg-biscoito'>
                        "Sempre haverá pessoas melhores e piores em
                        habilidades diferentes. Avance e ajude."
                    </p>
                }
            </div>
        </div>
    )
}