import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, handleDelete, mudarCor, aoFavoritar }) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.4') }}>
            <input value={time.cor} type="color" className='input-color' onChange={evento => mudarCor(evento.target.value, time.id)}/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {  
                    return (
                        <Colaborador 
                            key={indice}
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            onDelete={handleDelete}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section>

    )
}

export default Time