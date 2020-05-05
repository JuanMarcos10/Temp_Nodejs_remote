var express = require('express');
var router = express.Router();

const {query, validationResult } = require('express-validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  const segundo = (new Date()).getSeconds();
  res.locals.saludo = '<script>alert("Hola");</script>';
  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0
  };
  res.locals.users = [
    { name: 'Smith', age: 20 },
    { name: 'Thomas', age: 40 },
    { name: 'Jones', age: 37 },
  ];
  res.render('index', { title: 'Express by Juan Marcos' });
});


router.get('/parametros/:datos', (req, res, next) => {
  console.log(req.params);
  res.send('ok');
});

router.get('/parametrosopcional/:texto?', (req, res, next) => {
  console.log('req.params: ', req.params);
  res.send('ok opcional');
});
/* http://localhost:3000/enquerystring?color=rojo&altura=20 */
router.get('/apiv1/enquerystring', [
  query('altura').isNumeric().withMessage('must be numeric')
], (req, res, next) => {
  validationResult(req).throw(); // lanza una excepción si hay errores
  console.log('req.query', req.query);
  res.json({success: true});
});

router.post('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  res.send('ok');
});

module.exports = router;
