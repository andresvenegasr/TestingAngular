import { incrementar } from './numeros';

describe('Pruebas de números', () => {
    it('Debe de retornar 100, si el número ingresado es mayor a 100', () => {
        const numero: number = incrementar(130);
        expect(numero).toBe(100);
    });
    
    it('Debe de retornar el número ingresado + 1, si el número no es mayor a 100', () => {
        const numero: number = incrementar(55);
        expect(numero).toBe(56);
    });
    
});