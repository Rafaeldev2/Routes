import { createContext, useState } from "react";

export const UsuariosContext = createContext()

export const UsuariosContextProvider = ( ({children}) => {
    const senhorSupremodoUniverso = 'Rafael'
    const [usuarios, setUsuarios] = useState([
        {
            nome: 'ET Bilu',
            email: 'busquem@conhecimento.com'
        }
    ])

    return(
        <UsuariosContext.Provider value={{usuarios, senhorSupremodoUniverso}}>
            {children}
        </UsuariosContext.Provider>
    )
}
)