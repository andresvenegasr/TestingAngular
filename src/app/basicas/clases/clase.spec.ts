import { Jugador } from './clase';

describe('Pruebas de clase', () => {
    let jugador = new Jugador();

    // beforeAll()
    // beforeEach()

    // afterAll()
    // afterEach()

    beforeAll(() => {
        
    })
    beforeEach(() => {
        jugador = new Jugador();
    })
    afterAll(() => {
        
        
    })
    afterEach(() => {
        
        
    })

    it('Debee de retornar 80 de hp, si recibe 20 de daño.', () => {
        //const jugador = new Jugador();

        const valor = jugador.recibeDanio(20);

        expect(valor).toBe(80);
    });
    

    it('Debee de retornar 50 de hp, si recibe 50 de daño.', () => {
        
        const valor = jugador.recibeDanio(50);

        expect(valor).toBe(50);
    });

    it('Debee de retornar 0 de hp, si recibe 100 de daño o más.', () => {
        
        const valor = jugador.recibeDanio(150);
        
        expect(valor).toBe(0);
    });
});