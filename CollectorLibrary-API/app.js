var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var routesTestRouter = require('./routes/routesTest');
const authorsRouter = require('./routes/authors'); 

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

console.log("SwaggerUi tiene la función serve?:", !!swaggerUi.serve);
const swaggerDocument = YAML.load('./docs/index.yaml');



var app = express();


if (swaggerUi && swaggerUi.serve) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
    console.error("Error: swaggerUi no se cargó correctamente");
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));






app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testRoute', routesTestRouter);
app.use('/authors', authorsRouter); 


app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error'); 
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;