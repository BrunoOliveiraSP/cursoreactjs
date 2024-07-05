import './index.scss'
import axios from 'axios';

import Cabecalho from '../../components/cabecalho'
import { useState } from 'react';



export default function ChamadaApi() {
    const [cep, setCEP] = useState('');
    const [infoLogradouro, setInfoLogradouro] = useState('');


    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';

        let resp = await axios.get(url);
        let dados = resp.data;

        let msg = dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/' + dados.uf;
        setInfoLogradouro(msg);
    }



    return (
        <div className='pagina-chamada-api pagina'>
            <Cabecalho titulo="ReactJS | Chamando APIs" />

            <div className='secao correio'>
                <h1> API do Correio </h1>

                <div>
                    <input type='text' placeholder='Digite o CEP' value={cep} onChange={e => setCEP(e.target.value)} />
                    <button onClick={buscarCEP}> Buscar </button>
                </div>

                <p>
                    {infoLogradouro}
                </p>
            </div>
        </div>
    )
}