import './Time.css'
import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import { useContext } from 'react';
import { TierListContext } from '../../context/TierListContext';
import { Droppable } from '@hello-pangea/dnd';

const Time = ({ id, nome, cor, time }) => {

    const { colaboradores, times, setTimes } = useContext(TierListContext)

    const css = { backgroundColor: hexToRgba(cor, '0.2') }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time => {
            if (time.id === id)
                time.corTime = cor;
            return time
        }))
    }

    return (
        <Droppable droppableId={id} type='list' direction='horizontal'>
            {(provided) => (
                <section
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className='time'
                    style={css}
                >
                    <div className='categoriaName'>
                        <input value={cor} onChange={evento => mudarCorDoTime(evento.target.value, id)} type='color' className='input-cor'></input>
                        <h3 style={{ borderColor: cor }}>{nome}</h3>
                    </div>
                    <div className='colaboradores'>
                        {colaboradores.filter((colaborador) =>
                            colaborador.time === time.nomeTime).map((colaborador, index) => (
                                <Colaborador id={colaborador.id}
                                    index={index}
                                    favorito={colaborador.favorito}
                                    corDeFundo={cor}
                                    key={colaborador.id}
                                    nome={colaborador.nome}
                                    cargo={colaborador.cargo}
                                    imagem={colaborador.imagem}
                                />
                            ))}
                    </div>
                    {provided.placeholder}
                </section >
            )}

        </Droppable>
    )
}

export default Time