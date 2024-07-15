import { useReducer, useState } from "react"
import { fullcrudContext } from "./fullcrudContext"
import userReducer, { initialState } from "./userReducer"
const ContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        "id_usuario": 0,
        "usuario": "",
        "contrasena": ""
    })

    const [state, dispatch] = useReducer(userReducer, initialState)

    return (
        <fullcrudContext.Provider
            value={[state, dispatch]}
        >
            { children }
        </fullcrudContext.Provider>
    )
}

export default ContextProvider