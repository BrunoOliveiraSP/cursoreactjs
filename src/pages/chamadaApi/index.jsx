import './index.scss'
import axios from 'axios';

import { useState } from 'react';

import Cabecalho from '../../components/cabecalho'
import CartaoOmdb from '../../components/cartaoOmdb';



export default function ChamadaApi() {
    const [cep, setCEP] = useState('');
    const [infoLogradouro, setInfoLogradouro] = useState('');

    const [filmeBusca, setFilmeBusca] = useState('');
    const [listaFilmes, setListaFilmes] = useState([]);



    async function buscarCEP() {
        let url = 'http://viacep.com.br/ws/' + cep + '/json/';

        let resp = await axios.get(url);
        let dados = resp.data;

        let msg = dados.logradouro + ', ' + dados.bairro + '. ' + dados.localidade + '/' + dados.uf;
        setInfoLogradouro(msg);
    }


    async function buscarFilmes() {
        let url = 'http://www.omdbapi.com?apikey=d43a5114&s=' + filmeBusca;

        let resp = await axios.get(url);
        let dados = resp.data;

        if (dados.Response == 'False') {
            alert('Nenhum filme encontrado!');
            return;
        }

        
        let filmesEncontrados = dados.Search;
        setListaFilmes(filmesEncontrados)
    }



    return (
        <div className='pagina-chamada-api pagina'>
            <Cabecalho titulo="ReactJS | Chamando APIs" />

            <div className='secao omdb'>
                <h1> API Omdb </h1>

                <div className='entradas'>
                    <input type='text' placeholder='Nome do filme' value={filmeBusca} onChange={e => setFilmeBusca(e.target.value)} />
                    <button onClick={buscarFilmes}>Buscar</button>
                </div>

                <div className='lista-filmes'>
                    {listaFilmes.map(item =>
                        <CartaoOmdb item={item} />
                    )}
                </div>                    
                

                {/* <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFilmes.map(item =>
                            <tr>
                                <td>{item.imdbID}</td>
                                <td>{item.Title}</td>
                                <td>{item.Year}</td>
                            </tr>
                        )}
                    </tbody>
                </table> */}
            </div>


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