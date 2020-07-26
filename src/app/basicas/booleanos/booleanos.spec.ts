import { usuarioIngresado } from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe de retornar true', () => {
        expect(usuarioIngresado()).toBeTruthy();
    });
    
});