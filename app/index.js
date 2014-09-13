if (process.env.NODE_ENV === 'production') {
  require('newrelic');
}

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    constants = require(__dirname + '/libs/constants')(),
    routes = require(global.APP_DIR + '/routes'),
    expects = require(global.APP_DIR + '/middlewares/expects'),
    cors = require(global.APP_DIR + '/middlewares/cors'),
    phantom = require(global.APP_DIR + '/middlewares/phantom'),
    Database = require(global.APP_DIR + '/classes/Database'),
    config = require(global.APP_DIR + '/config');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(cors);
app.use(phantom)
app.use(expects);

var database = new Database();
database.connect(config.get('database.name'));

app.set('view engine', 'jade');
app.set('public', global.PUBLIC_DIR);
app.set('showStackError', true);
app.set('views', global.APP_DIR + '/views');

app.use(express.static(global.PUBLIC_DIR));

app.listen(config.get('app.port'));
console.log('\nListening on port ' + config.get('app.port') + '\nIn environment ' + global.ENV + '\n');

routes(app);

module.exports = exports = app;