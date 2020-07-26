import { mensaje } from './string';

describe('Pruebas de string', () => {
    it('Debe de regresar un string', () => {
        const respuesta = mensaje('Andrés');

        expect(typeof respuesta).toBe('string');
    });

    it('Debe de retornar un saludo con el nombre enviado', () => {
        const respuesta = mensaje('Andrés');

        expect(respuesta).toContain('Saludos Andrés');
    });
    
});