
describe('Esta es una prueba demo', () => {
    
    test('Verificación de prueba lógica', () => { 
    
        if (true != true) {
            throw new Error("Aquí ocurrió un error");
        }
    
    });

    test('Verificación de prueba lógica fallida', () => { 
    
        if (true == true) {
            throw new Error("Aquí ocurrió un error");
        }
    
    });

    test('Prueba empleando el marco de Jest', () => {
        //1. Inicialización
        const msg1 = "Hola mundo ";

        //2. Estímulo
        const msg2 = msg1.trim(msg1);

        //3. Comportamiento
        //expect(msg1).toBe(msg2);
        expect(msg1).toBe(msg2);
    })


})
