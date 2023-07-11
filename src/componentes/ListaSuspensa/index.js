import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    function mudando(event){
        props.alterando(event.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={mudando} value={props.valor}>
                <option>{''}</option>
                {props.itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;