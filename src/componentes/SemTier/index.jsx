import React, { useContext } from 'react'
import { TierListContext } from '../../context/TierListContext'
import Colaborador from '../Colaborador'

const SemTier = ({ aoMoverItem }) => {

    const { colaboradores } = useContext(TierListContext)

    return (
        <section>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <Colaborador id={colaborador.id}
                        favorito={colaborador.favorito}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoMoverItem={aoMoverItem}
                    />
                )}
            </div>
        </section>
    )
}

export default SemTier
