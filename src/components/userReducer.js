export const types = {
    authLogin: "Ingreso del usuario",
    authLogout: "Salida del usuario",
}

export const initialState = {
    "id_usuario": -1,
}

const userReducer = (state, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                id_usuario: action.payload
            }
        default:
            return state;
    }
}

export default userReducer