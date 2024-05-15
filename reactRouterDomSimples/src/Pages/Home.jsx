import { useContext } from 'react'
import { UsuariosContext } from '../context/GlobalContext'

function Home() {
  const {usuarios, senhorSupremodoUniverso} = useContext(UsuariosContext)
  return (
    <div>
      <h1>Bem-Vindo à home.</h1>
      {usuarios[0].nome}
      <p>Senhor Supremo do Universo: {senhorSupremodoUniverso}</p>
    </div>
  )
}

export default Home