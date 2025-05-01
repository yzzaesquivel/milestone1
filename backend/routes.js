const controller = require('./controller');

module.exports = (app) => {
  // CORS headers
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
  });

  // Routes
  app.post('/api/auth/signup', controller.signup);
  app.post('/api/auth/login', controller.login);
  app.get('/find-all', controller.findAll);

  // Add the route to get all products
  app.get('/api/products', controller.getAllProducts);

};

  // Add more like:
  // app.post('/add', controller.add);
  // app.get('/find-by-id', controller.findById);

