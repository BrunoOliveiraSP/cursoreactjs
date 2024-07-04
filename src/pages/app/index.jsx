import './index.scss';

import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1 className='titulo1'>
          Estudos de ReactJS &nbsp;
          <i className='fa fa-heart'></i>
        </h1>   
      </header>

      <section className='secao'>
        <h1> Estudando ReactJS</h1>

        <ul>
          <li>
            <Link to='/contato'>Ir para Contato</Link>
          </li>
          <li>
            <Link to='/eventos'>Ir para Eventos</Link>
          </li>
          <li>
            <Link to='/varestado'>Ir para Variável de Estado</Link>
          </li>
        </ul>
      </section>
      
      
    </div>
  );
}

