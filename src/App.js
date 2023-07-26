import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nomeTime: 'Programação',
      corTime: '#57C278',
    },
    {
      id: uuidv4(),
      nomeTime: 'Front-End',
      corTime: '#82CFFA',
    },
    {
      id: uuidv4(),
      nomeTime: 'Data Science',
      corTime: '#A6D157',
    },
    {
      id: uuidv4(),
      nomeTime: 'Devops',
      corTime: '#E06B69',
    },
    {
      id: uuidv4(),
      nomeTime: 'UX e Design',
      corTime: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nomeTime: 'Mobile',
      corTime: '#FFBA05',
    },
    {
      id: uuidv4(),
      nomeTime: 'Inovação e Gestão',
      corTime: '#FF8A29',
    }
  ]);

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function favoritarColaborador(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) 
        colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => { 
      if(time.id === id)
        time.corTime = cor;
      return time  
      }))
  }

  function cadastrarTime(novoTime){
    setTimes([ ...times, {...novoTime, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      cadastrarTime = {cadastrarTime}
      idColaborador={uuidv4()} 
      times={times.map(time => time.nomeTime)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        id = {time.id}
        key = {time.nomeTime}
        nome={time.nomeTime} 
        mudarCor = {mudarCorDoTime}
        cor={time.corTime}
        aoDeletar={deletarColaborador}
        aoFavoritar = {favoritarColaborador}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nomeTime )}
      />)}   

    </div>
  );
}

export default App;