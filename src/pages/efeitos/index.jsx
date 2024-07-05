import './index.scss'

import Cabecalho from '../../components/cabecalho'
import { useState, useEffect } from 'react'



export default function Efeitos() {
    const [mencao, setMencao] = useState('');
    const [sitMencao, setSitMencao] = useState('-');


    useEffect(() => {
        avaliarMencao();

    }, [mencao])




    function avaliarMencao() {
        if (mencao == 'P') {
            setSitMencao('Plenamento Satisfatório');
        }
        else if (mencao == 'S') {
            setSitMencao('Satisfatório');
        }
        else if (mencao == 'NS') {
            setSitMencao('Não Satisfatório');
        }
        else {
            setSitMencao('Inválido');
        }
    }


    return (
        <div className='pagina-efeitos pagina'>
            <Cabecalho titulo="ReactJS | Efeitos" />

            <div className='secao'>
                <h1> Situação Aluno </h1>

                <div className='sit-aluno'>
                    <div>{sitMencao}</div>
                    
                    <div>
                        <label>Menção: </label>
                        <input type='text' value={mencao} onChange={e => setMencao(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    )
}