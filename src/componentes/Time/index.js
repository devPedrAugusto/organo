import Carta from '../Carta'
import './Time.css'

const Time = (props) => {
    const cssCorPrimaria = { borderColor: props.corPrimaria } 
    return(
        (props.colaboradores.length > 0) ? <section style={{ backgroundColor: props.corSecundaria }} className='time'>
            <h3 style={ cssCorPrimaria }>{props.nomeTime}</h3>
            <div className='cartas'>
                {props.colaboradores.map(colaborador =>
                <Carta key={colaborador.nome} 
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                img={colaborador.img}
                corPrimaria = {props.corPrimaria}/>)}
            </div>
        </section> : ''
    )
}

export default Time