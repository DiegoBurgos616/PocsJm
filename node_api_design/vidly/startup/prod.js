//Todas las funciones middlware para produccion las vamos a poner acá.
const helment = require("helmet");
const compression = require("compression");

module.exports = function(app) {
  app.use(helmet());
  app.use(compression());
};
