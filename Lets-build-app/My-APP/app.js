var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

//mongoose.connect('mongodb://test:test@ds025583.mlab.com:25583/nodetodosample-aj');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine','ejs');

//mongoose.connect(config.getDbConnectionString());
mongoose.connect('mongodb://test:test@ds025583.mlab.com:25583/nodetodosample-aj');
setupController(app);
apiController(app);
app.listen(port);