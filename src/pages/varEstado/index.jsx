import './index.scss';
import { useState } from 'react';

import { tratarNumero } from '../../utils/conversao'
import { calcularTotalIngresso } from '../../services/ingresso'


export default function VarEstado() {
    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState('Oie');
    const [tituloS3, setTituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, setMarcouOpcaoS4] = useState(false);
    const [tituloS5, setTituloS5] = useState('Oie');
    const [descricaoS5, setDescricaoS5] = useState('Oie');

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const [qtdIng, setQtdIng] = useState(0);
    const [meioIng, setMeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);

    const [novaMeta, setNovaMeta] = useState('');
    const [listaMetas, setListaMetas] = useState([]);
    const [editando, setEditando] = useState(-1);
    
    const [plano, setPlano] = useState('');
    const [situacao, setSituacao] = useState('');
    const [cor, setCor] = useState('');
    const [listaPlanos, setListaPlanos] = useState([]);




    //let contador = 0;
    function aumentar() {
        // contador = contador + 1;
        if (contador < 10) {
            setContador(contador + 1)
            alert(contador);
        }
        //alert(contador);
    }

    function diminuir() {
        //contador = contador - 1;
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    function somar() {
        let soma = tratarNumero(num1) + tratarNumero(num2);
        setRes(soma);
    }

    function calcularIngresso() {
        let tot = calcularTotalIngresso(qtdIng, meioIng, cupom);
        setTotalIng(tot);
    }
    

    function adicionarMeta() {
        //listaMetas.push(novaMeta);

        if (novaMeta != '') {

            if (editando == -1) {
                setListaMetas([...listaMetas, novaMeta]);
                setNovaMeta('');
            }
            else {
                listaMetas[editando] = novaMeta;
                setListaMetas([...listaMetas]);
                setNovaMeta('');
                setEditando(-1);
            }
        }
    }

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            adicionarMeta();
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        setListaMetas([...listaMetas]);
    }

    function alterarMeta(pos) {
        setNovaMeta(listaMetas[pos])
        setEditando(pos);
    }
    

    function adicionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        setListaPlanos([...listaPlanos, novoPlano])

        setPlano('')
        setSituacao('')
        setCor('')
    }


    console.log(listaPlanos)


    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1> ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao planos'>
                <h1> Meus Planos atuais</h1>

                <div className='entrada'>
                    <input type='text' placeholder='Meu plano aqui' value={plano} onChange={e => setPlano(e.target.value)} />
                    <input type='text' placeholder='Situação do plano aqui' value={situacao} onChange={e => setSituacao(e.target.value)} />
                    <input type='text' placeholder='Cor de identificação' value={cor} onChange={e => setCor(e.target.value)} />
                    <button onClick={adicionarPlano}> Adicionar Plano </button>
                </div>

                
                <div className='lista'>
                    {listaPlanos.map((item, pos) =>
                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.tema}}>&nbsp;</div>
                            <div>
                                <h1> {item.titulo} </h1>
                                <h2> {item.tempo} </h2>
                            </div>
                        </div> 
                    )}

                    
                </div>
            </div>


            <div className='secao metas'>
                <h1> Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type='text' placeholder='Digite sua meta aqui' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMeta}> Adicionar </button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) => 
                        <li key={pos}>
                            <i className='fa fa-pen-to-square' onClick={() => alterarMeta(pos)}></i> &nbsp;
                            <i className='fa fa-trash-can' onClick={() => removerMeta(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>
 
            </div>


            <div className='secao ingresso'>
                <h1> Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade: </label>
                        <input type='text' value={qtdIng} onChange={e => setQtdIng(e.target.value)} />
                    </div>
                    <div>
                        <label>Meia Entrada:</label>
                        <input type='checkbox' checked={meioIng} onChange={e => setMeioIng(e.target.checked)} />
                    </div>
                    <div>
                        <label>Cupom:</label>
                        <input type='text' value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>
                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcularIngresso}> Calcular </button>
                    </div>
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                    
                </div>

            </div>


            <div className='secao calculadora'>
                <h1> Calculadora </h1>
                <div className='entrada'>
                    <input type='text' value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type='text' value={num2} onChange={e => setNum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>
                <button onClick={somar}> Somar </button>
            </div>

            
            <div className='secao'>
                <h1> Contador </h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                    {contador}
                    <button onClick={diminuir}> - </button>
                </div>
            </div>

            
            <div className='secao'>
                <h1> {tituloS2} </h1>
                <input type='text' value={tituloS2} onChange={e => setTituloS2(e.target.value)} />
            </div>

            
            <div className='secao'>
                <h1> {tituloS3} </h1>
                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>
            </div>

            
            <div className='secao'>
                <h1> Programar é Lindezinha? {marcouOpcaoS4 ? 'Sim' : 'Não'} </h1>
                <input type='checkbox' checked={marcouOpcaoS4} onChange={e => setMarcouOpcaoS4(e.target.checked)} /> Programar é lindezinha?
            </div>


            <div className='secao'>
                <h1> {tituloS5} </h1>
                
                <input type='text' value={descricaoS5} onChange={e => setDescricaoS5(e.target.value)} />

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>

        </div>
    )
}
