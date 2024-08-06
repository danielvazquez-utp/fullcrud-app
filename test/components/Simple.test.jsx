import { render } from "@testing-library/react";
import Simple from "../../src/components/Simple";

describe('Pruebas generales del componente Simple', () => {

    test('Se realiza comparación con snapshot', () => {

        const { container } = render( <Simple titulo="Hello world" subtitulo="Final de cuatrimestre" /> );
        //console.log(container);
        expect( container ).toMatchSnapshot();
    });

    
    test('Se debe mostrar el título dentro de un <h1>', () => {

        const titulo = "Hola mundo";
        const { container, getByText } = render( <Simple titulo={ titulo } /> );

        expect( getByText(titulo) ).toBeTruthy();

        const h1 = container.querySelector("h1");
        expect( h1.innerHTML ).toContain( titulo );

    });
    

});