const BackendMock = require('./../src/backend-mock.services');

describe('SUITE: Prueba de servicios mock', () => {
  let backendMock;

  beforeEach(() => {
    backendMock = new BackendMock();
  });

  it('Evalua el retorno de getUserData()', done => {
    backendMock.getUserData()
      .then(userData => {
        expect(userData)
          .not.toBeUndefined(null);
        expect(userData)
          .toBeDefined();
        expect(userData.name)
          .toEqual(jasmine.any(String));
      console.log('Retorno de getUserData() exitoso!!');
      done();
      });
  });

  it('Verifica si un email es valido.', () => {
    expect(backendMock.isEmail())
      .toBe(false);
    expect(backendMock.isEmail(undefined))
      .toBe(false);
    expect(backendMock.isEmail(null))
      .toBe(false);
    expect(backendMock.isEmail({}))
      .toBe(false);
    expect(backendMock.isEmail(''))
      .toBe(false);
    expect(backendMock.isEmail('abc'))
      .toBe(false);
    expect(backendMock.isEmail(123))
      .toBe(false);
    expect(backendMock.isEmail('@'))
      .toBe(false);
    expect(backendMock.isEmail('a@a.a'))
      .toBe(false);
    expect(backendMock.isEmail('abc@acb.abc'))
      .toBe(false);
    expect(backendMock.isEmail('email@example.com'))
      .toBe(true);
  });

  it('Verifica que un usuario se guarde en la base de datos.', done => {
    // No se pasan parametros y se espera que se instancie un Error.
    let promise1 = backendMock.saveNewUser().then(result => {
      expect(result instanceof Error)
        .toBe(true);
    });

    // Se pasan parametros erroneos y se espera que se instancie un Error.
    let promise2 = backendMock.saveNewUser(1, '2').then(result => {
      expect(result instanceof Error)
        .toBe(true);
    });

    // Se pasan parametros correctos y no se espera que se instancie un Error.
    let promise3 = backendMock.saveNewUser('Cristian', 20).then(result => {
      expect(result instanceof Error)
        .toBe(false);
    });

    // Evaluamos que se resuelvan todas las promesas.
    Promise.all([promise1,promise2,promise3])
      .catch(() => done());

    expect().nothing();
  });

  it('Verifica que callDependency() llame a dependency()', () => {
    // El segundo parametro debe llamarse igual que el metodo que queremos "Espiar".
    spyOn(backendMock, 'dependency');
    backendMock.callDependency();
    expect(backendMock.dependency).toHaveBeenCalled();
  });

});
