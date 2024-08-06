import { getSaludo, getUsuarioById, getUsuarios } from "../../src/utils/usuarios";

describe('Pruebas en funciones de usuario', () => { 

    test('Prueba de mensaje', () => {

        const nombre = "Daniel";
        const msg = getSaludo(nombre);
        
        /* En este punto hay un error que exige agregar una configuración en Babel https://jestjs.io/docs/getting-started y de la misma manera hay que agregar el archivo de configuración de babel.config.cjs */

        expect( msg ).toBe( `Hola ${ nombre } ` );

    });

    test('Prueba para recuperar la colección de usuarios', async () => {
        /* const id = 1;
        const usuario = await getUsuarioById(id);
        console.log(usuarios);

        expect( usuarios ).toBe('string'); */

        /* En este punto hay que instalar una dependencia para fetch polifill 
        https://www.npmjs.com/package/whatwg-fetch

        Creando dos archivos mas:
        - jest.config.js
        - jest.setup.js */

        const usuario = await getUsuarioById(1);
        console.log(usuario);

        const respuesta = {
            "status": "ok",
            "msg": "Si se encontró el usuario",
            "data": {
              "id_usuario": 1,
              "usuario": "daniel",
              "contrasena": "12345"
            }
        }

        expect( usuario ).toEqual( respuesta );

    })

})