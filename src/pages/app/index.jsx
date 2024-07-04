import './index.scss';

import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className="pagina-app pagina">
      <header className='cabecalho'>
        <h1 className='titulo1'>
          Estudos de ReactJS
          <i className='fa fa-heart'></i>
        </h1>   
      </header>

      <section className='secao'>
        <h1> Estudando ReactJS</h1>
        
        <ul>
          <li>
            <Link to='/contato'>Ir para Contato</Link>
          </li>
        </ul>
      </section>
      
      
    </div>
  );
}

