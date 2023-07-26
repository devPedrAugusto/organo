import { useState } from 'react'
import Botao from '../Botao'
import Campo  from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id: props.idColaborador,
            favorito: false,
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo  
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo 
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                return props.cadastrarTime({nomeTime, corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo  
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do time" 
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo 
                    //obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time" 
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario