import { render } from "@testing-library/react"
import Simple from "../../src/components/Simple"

describe('Pruebas generales del componente Simple', () => {

    const titulo = "Hola mundo";

    test('Coincide con con snapshot', () => {
        const { container } = render( <Simple titulo={ titulo } /> );
        expect( container ).toMatchSnapshot();
    });

    
    test('Contiene el mensaje "Hola mundo"', () => {

        const { container, getByText } = render( <Simple titulo={ titulo } /> );
        expect( getByText(titulo) ).toBeTruthy();

    });

})