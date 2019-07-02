module.exports = function(config) {
  config.set({
    // Ruta raiz para resolver las rutas definidas en 'files' y 'excludes'.
    basePath: '',

    //files/patterns para excluir de los archivos cargados.
    exclude: [],

    //files/patterns para cargar en el navegador.
    files: [
      {
        pattern: 'tests/**/*.spec.js',
        watched: true,
        served: true,
        included: true
      }
      /*parameters:
          watched: Si autoWatch es true, todos los archivos que se configuren como true, seran observador para detectar cambios.
          served: Determina si los archivos deben ser servidos por el servidor de karma.
          included: Determina si deben incluirse los archivos en el navegador con la etiqueta <script>.
          nocache: Determina si los archivos deben ser enviados desde el disco en cada solicitud del servidor de karma. */
      /*assets:
          {pattern: '*.html', watched:true, served:true, included:false}
          {pattern: 'images/*', watched:false, served:true, included:false} */
    ],

    // Ejecuta las pruebas cada vez que un objeto observado cambia.
    autoWatch: true,

    // Si es true, karma ejecutara las pruebas y luego saldra del navegador.
    singleRun:false,

    // Si es true, karma falla al ejecutar suite de pruebas vacias.
    failOnEmptyTestSuite: false,

    // Setea el nivel de logueo
    logLevel: config.LOG_WARN, //config.LOG_DISABLE, config.LOG_ERROR, config.LOG_INFO, config.LOG_DEBUG

    // Lista de frameworks a utilizar, jasmin se instala automaticamente.
    frameworks: ['jasmine'],

    // Lista de navegadores a utilizar
    browsers: ['Chrome'/*,'PhantomJS','Firefox','Edge','ChromeCanary','Opera','IE','Safari'*/],

    // Lista de reporters a utilizar.
    reporters: ['mocha','kjhtml'/*,'dots','progress','spec'*/],

    // Direccion donde escucha el servidor, por defecto '0.0.0.0'
    listenAddress: '0.0.0.0',

    // El nombre de host que utilizara al capturar los navegadores, por defecto 'localhost'.
    hostname: 'localhost',

    // Puerto donde escuchara el servidor, por defecto '9876'.
    port: 9876,

    // Cuando el lanzamiento de una navegador falla, karma intenta relanzarlo nuevamente. Por defecto es '2'.
    retryLimit:0,

    // Tiempo que espera karma a que un navegador se vuelva a conectar, por defecto es '2000'.
    browserDisconnectTimeout: 5000,

    // Tiempo que espera karma un mensaje del navegador antes de desconectarse, por defecto es '10000'.
    browserNoActivityTimeout: 10000,

    // Tiempo de espera para capturar un navegador, por defecto '60000'.
    captureTimeout: 60000,

    client: {
      // Capturar toda la salida de la consola y canalizarla al terminal, por defecto es 'true'.
      captureConsole:false,
      // Si es true, karma borra el contexto de la ventana al terminar las pruebas, por defecto es 'true'.
      clearContext:false,
      // Ejecuta las pruebas en la misma ventana que el cliente, sin usar iframa o una nueva ventana, por defecto es 'false'.
      runInParent: false,
      // Si es true, ejecuta las pruebas en un iframe | Si es falso, ejecuta las pruebas en una nueva ventana. Por defecto es 'true'.
      useIframe:true,
      jasmine:{
        // Le dice a Jasmine que ejecute las pruebas en orden semi aleatorio, por defecto es 'false'.
        random: false
      }
    },

    /* karma-webpack config
       pasa la configuracion de webpack a karma
       añade `babel-loader` a la configuracion de webpack
       para interpretar ES6+ en el navegador. */
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          }
        ]
      }
    },
    preprocessors: {
      // Agrega webpack como preprocesador para soportar require() en las suites de pruebas.
      './tests/*.js': ['webpack']
    },
    webpackMiddleware: {
      // Desactiva la salida bash de webpack al ejecutar las pruebas.
      noInfo: true,
      stats: 'errors-only'
    },

    /*karma-mocha-reporter config*/
    mochaReporter: {
      output: 'noFailures'  //full, autowatch, minimal
    }
  });
};
