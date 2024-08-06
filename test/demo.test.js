describe('Pruebas en demo', () => { 

    test('Este es un demo de prueba', () => { 
        // Prueba inicial
        /* if (true != false) {
            throw new Error("Aquí hubo un error");
        } */
    
        // 1. inicialización
        const msg ="Hola mundo";
    
        // 2. Estímulo
        const msg2 = msg.trim(msg);
    
        // 3. Observar el comportamiento
        //expect( msg ).toBe( msg2 );
        // instalar dependencias de jest https://www.npmjs.com/package/@types/jest
    
        expect(msg).toBe(msg2);
    })

})
