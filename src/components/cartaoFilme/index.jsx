import './index.scss'


export default function CartaoFilme(props) {

    function identificarClassificacao() {
        if (props.item.classificacao == 'livre')
            return 'c-l';
        else if (props.item.classificacao == '12')
            return 'c-12';
        else if (props.item.classificacao == '14')
            return 'c-14';
        else if (props.item.classificacao == '16')
            return 'c-16';
        else if (props.item.classificacao == '18')
            return 'c-18';
    }

    return (
        <div className='comp-cartao-filme'>
            <img src={props.item.url} />
            
            {props.item.estreia != '' &&
                <div className='estreia'>
                    {props.item.destaque == true &&
                        <i className='fa fa-star estrela'></i>
                    }
                    Estreia {props.item.estreia}
                </div>
            }

            <p> {props.item.nome} </p>
            <div className={'classificacao ' + identificarClassificacao()}> {props.item.classificacao} </div>
        </div>
    )
}