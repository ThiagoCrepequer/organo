import { TiDeleteOutline } from 'react-icons/ti';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, onDelete, aoFavoritar }) => {
    function favoritar () {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <TiDeleteOutline 
            size={25} 
            className='deletar' 
            onClick={() => onDelete(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart color='red' {...propsFavorito}/> 
                    : <AiOutlineHeart {...propsFavorito}/> 
                }
            </div>
        </div>
    </div>)
}

export default Colaborador