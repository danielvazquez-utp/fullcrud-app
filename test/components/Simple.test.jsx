import { render, screen } from "@testing-library/react"
import Simple from "../../src/components/Simple"

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

    test('Verifica si elemento test-id contiene el título', () => {

        const titulo = "Hola mundo";
        const { container, getByTestId } = render( <Simple titulo={ titulo } /> );

        //expect( getByTestId('test-title') ).toBeTruthy();
        expect( getByTestId('test-title').innerHTML ).toContain( titulo );

    });

    test('Mostrar subtitulo pasado por props', () => {
        
        const titulo = "Hola mundo";
        const subtitulo = "desde React";
        const { getByText, getAllByText } = render( <Simple titulo={ titulo } subtitulo={ subtitulo } /> );
        //expect( getByText(subtitulo) ).toBeTruthy();
        expect( getAllByText(subtitulo).length ).toBe(2);
    });

    test('Debe mostra el mensaje Hola mundo', () => {
        const titulo = "Hola mundo";
        render( <Simple titulo={ titulo } /> );
        //screen.debug();
        expect( screen.getByText( titulo ) ).toBeTruthy();
    })

})