import { render } from "@testing-library/react"
import Simple from "../../src/components/Simple"

describe('first', () => {

    test('should first', () => {

        const titulo = "Hola mundo";
        const { container } = render( <Simple titulo={titulo} /> );
        //console.log(container);
        expect( container ).toMatchSnapshot();
    })

    test('Mostrar h1', () => { second })

})