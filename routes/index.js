var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // index is the file name index.jade
});
router.get('/health',function (req, res) {
    var responseObj = { message : 'OK' };
    res.send(responseObj);
})
router.get('/ilike/:fruitchoice',function (req, res) {
    var choice = req.params.fruitchoice;
    var responseObj = { message : 'I like ' + choice + ' too..'};
    res.send(responseObj);
})

module.exports = router;
