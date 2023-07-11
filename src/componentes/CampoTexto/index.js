import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const digitando = (event) => {
        props.alterando(event.target.value);
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={digitando} required = {props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto;