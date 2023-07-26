import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({id, nome, imagem, cargo, corDeFundo, aoDeletar, favorito, aoFavoritar}) => {
    
    function favoritar() {
        console.log(favorito)
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return (<div className='colaborador'>
        <AiFillCloseCircle 
            size={30} 
            className='deletar' 
            onClick={() => aoDeletar(id)}>
        </AiFillCloseCircle>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div>
            {favorito 
                ? <AiFillHeart {...propsFavorito}/> 
                : <AiOutlineHeart {...propsFavorito}/> 
            }
            </div>
        </div>
    </div>)
}

export default Colaborador