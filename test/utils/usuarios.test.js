import { getMensaje, getUsuarioById } from "../../src/utils/usuarios";

describe('Pruebas sobre las funciones de Usuarios', () => {

    test('Recuperación de mensaje', () => {
        const usuario = "Paulo";
        const msg = getMensaje(usuario);
        expect(msg).toBe(`Saludos ${ usuario }`);
    });

    test('Evaluando función que recupera un usuario por identificador', async () => {

        const id = 7;
        const usuario = await getUsuarioById( id );
        const respuesta = {
            "status": "ok",
            "msg": "Si se encontró el usuario",
            "data": {
              "id_usuario": 7,
              "usuario": "daniel",
              "contrasena": "12345"
            }
        }
        expect( usuario ).toEqual( respuesta );

    });

})