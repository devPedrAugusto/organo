import './Carta.css'

const Carta = ({ nome, img, cargo, corPrimaria}) => {
    return(
        <div className='carta'>
            <div className='top' style={{backgroundColor: corPrimaria}}>
                <img src={img}/>    
            </div>
            <div className='bottom'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Carta