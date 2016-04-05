var userController = require('../users/usersController.js');
var documentController = require('../documents/documentsController.js');

module.exports = function (app, express) {
  // Authentication Routes
  app.post('/api/users/login', userController.login);
  app.post('/api/users/signup', userController.signup);
  app.get('/api/users/signedin', userController.checkAuth);
  app.post('/api/users/getInfo', userController.getInfo);

  // Data routes
  app.post('/api/users/document/', documentController.documentsByUser);
  app.get('/api/document/', documentController.getDocument);
  app.post('/api/document/', documentController.saveDocument);
};