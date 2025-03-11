import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useContext } from 'react'
import { TierListContext } from '../../context/TierListContext'
import { DragDropContext, Draggable } from '@hello-pangea/dnd'

const Colaborador = ({ id, index, nome, imagem, favorito }) => {

    const { colaboradores, setColaboradores } = useContext(TierListContext)

    function favoritarColaborador(id) {
        setColaboradores(colaboradores.map(colaborador => {
            if (colaborador.id === id)
                colaborador.favorito = !colaborador.favorito;
            return colaborador
        }))
    }

    function deletarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritarColaborador
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}

                    ref={provided.innerRef}
                    className='colaborador'
                >
                    <AiFillCloseCircle
                        size={30}
                        className='deletar'
                        onClick={() => deletarColaborador(id)}>
                    </AiFillCloseCircle>
                    <div className='cabecalho'>
                        <img src={imagem} alt={nome} />
                    </div>
                    <div className='colaborador-rodape'>
                        <h4>{nome}</h4>
                        <div>
                            {favorito
                                ? (<AiFillHeart  {...propsFavorito} />)
                                : (<AiOutlineHeart {...propsFavorito} />)
                            }
                        </div>
                    </div>
                </div>
            )}

        </Draggable>
    )
}

export default Colaborador