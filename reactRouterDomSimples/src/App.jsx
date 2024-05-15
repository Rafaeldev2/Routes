import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { UsuariosContextProvider } from './context/GlobalContext'

function App() {

  return (
    <>
    <UsuariosContextProvider>
      <Header/>
      <Outlet />
      <Footer/>
    </UsuariosContextProvider>
    </>
  )
}

export default App