import './Organizador.css'
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'


const Organizador = ({ tags }) => {

    const [titulo, setTitulo] = useState('Esconder Formualário')
    const [contador, setContador] = useState(false)

    function esconderTags(tags, contador) {
        let answer;
        contador ? answer = 'block' : answer = 'none'
        document.querySelectorAll(tags).forEach(tag => tag.style.display = answer)
    }

    const propsEsconder = {
        size: 25,
        onClick: () => {
            setContador(!contador);

            if (contador)
                setTitulo('Esconder Formulário')
            else
                setTitulo('Apresentar Formulario')

            return esconderTags(tags, contador)
        }
    }



    return (
        <div className='Organizador'>
            <h2>{titulo}</h2>
            {contador
                ? <AiFillCaretUp {...propsEsconder}></AiFillCaretUp>
                : <AiFillCaretDown {...propsEsconder}></AiFillCaretDown>
            }
        </div>
    )
}

export default Organizador;