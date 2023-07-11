import './Form.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao';
import { useState } from 'react'

const Form = (props) => {

    const [nome, setNome] = useState('Pedro Augusto')
    const [cargo, setCargo] = useState('Dev-Jr')
    const [img, setImg] = useState('https://github.com/p4ndda.png')
    const [time, setTime] = useState('');

    const salvando = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome, cargo, img, time
        });
        setNome(``)
        setCargo(``)
        setImg(``)
        setTime(``)
    }

    return (
        <section className='formulario'>
            <form onSubmit={salvando}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio = {true} 
                label='Nome' 
                placeholder="Digite o seu Nome" 
                valor = {nome}
                alterando = {valor => setNome(valor)}/>

                <CampoTexto 
                obrigatorio = {true} 
                label='Cargo' 
                placeholder="Digite o seu Cargo" 
                valor = {cargo}
                alterando = {valor => setCargo(valor)}/>

                <CampoTexto 
                label='Imagem' 
                placeholder="Digite o endereço da imagem" 
                valor = {img}
                alterando = {valor => setImg(valor)}/>

                <ListaSuspensa 
                label = 'Time' 
                itens = {props.times} 
                valor = {time}
                alterando = {valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Form