import { render } from "@testing-library/react";
import Titlebreadcrums from "../../src/components/Titlebreadcrums";

describe('Pruebas eb Titlebreadcrums', () => {
    
    test('Aquí se hace un snapshot', () => {

        render( <Titlebreadcrums /> );

        /*
         en este punto se requiere agregar una modifición en jest.confif.cjs
         de la misma manera hay que instalar npm i jest-environment-jsdom
         https://www.npmjs.com/package/jest-environment-jsdom
         y posteriormente en babel.config.cjs agregar nueva configuración
        */

    });

});