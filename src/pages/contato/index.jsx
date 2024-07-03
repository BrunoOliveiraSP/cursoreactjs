import './index.scss'

import { Link } from 'react-router-dom';


export default function Contato() {


    return (
        <div className='pagina-contato'>
            <Link to='/'>
                <i className='fa fa-arrow-left voltar'></i>
            </Link>

            <h1 className='titulo1'>Contato</h1>
            <img className='icone' src='/assets/images/contato.png' />
        </div>
    )
}

