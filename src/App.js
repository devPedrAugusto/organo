import { useContext } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from '../src/componentes/Rodape'
import { TierListContext } from './context/TierListContext';
import SemTier from './componentes/SemTier';
import { DragDropContext } from '@hello-pangea/dnd';

function App() {

  const { colaboradores, setColaboradores, times } = useContext(TierListContext);
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination)
      return

    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return

    const colaboradorMovido = colaboradores.find((colab) => colab.id === result.droppableId)

    const novosColaboradores = [...colaboradores]

    const sourceIndex = novosColaboradores.findIndex((colab) => colab.id === result.droppableId)

    const [removido] = novosColaboradores.splice(sourceIndex, 1)

    if (source.droppableId != destination.droppableId) {
      const timeDestino = times.find((time) => time.id === destination.droppableId)

      if (timeDestino) {
        removido.time = timeDestino.nomeTime
      }

    }

    novosColaboradores.splice(destination.index, 0, removido)

    setColaboradores(novosColaboradores)

  }

  return (
    <div className="App">

      <Banner />
      <Formulario />

      <DragDropContext onDragEnd={handleDragEnd}>
        {times.map(time =>
          <Time
            id={time.id}
            key={time.id}
            nome={time.nomeTime}
            cor={time.corTime}
            time={time}
          />)}
      </DragDropContext>

      <SemTier />

      < Rodape />

    </div>
  );
}

export default App;