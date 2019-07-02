const Jugadores = require('./../src/index');

describe('SUITE: Prueba de unidad simple', () => {
    it('Verifica si esta tevez en los jugadores', () => {
      expect(Jugadores).toContain('Carlos Tevez');
    });
});
