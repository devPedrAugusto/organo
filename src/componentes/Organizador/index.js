import './Organizador.css'
import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'


const Organizador = ({titulo, tags, aoEsconder}) => {
    
    const [contador, setContador] = useState(false)

    const propsEsconder = {
        size: 25,
        onClick: ()=>{ 
            setContador(!contador);
            return aoEsconder(tags, contador)
        }
    }



    return(
        <div className='Organizador'>
            <h2>{titulo}</h2>
            {contador 
            ? <AiFillCaretUp {...propsEsconder}></AiFillCaretUp>
            :<AiFillCaretDown {...propsEsconder}></AiFillCaretDown>
            }
        </div>
    )
}

export default Organizador;