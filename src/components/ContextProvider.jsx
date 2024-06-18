import { useState } from "react"
import { fullcrudContext } from "./fullcrudContext"
const ContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({
        "id_user": 1,
        "name": "Daniel",
    })
    return (
        <fullcrudContext.Provider
            value={{
                usuario,
                setUsuario,
            }}
        >
            { children }
        </fullcrudContext.Provider>
    )
}

export default ContextProvider