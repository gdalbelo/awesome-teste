var express 	= require('express');
var app 		= express();
var path 		= require('path');
var adminRotas  = express.Router();
var mainPage      = express.Router();

mainPage.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/main.html'));
})

mainPage.get('/fotos', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

adminRotas.get('/caio', function(req, res) {
	res.sendFile(path.join(__dirname + '/caio.html'));
});

adminRotas.get('/clara', function(req, res) {
	res.sendFile(path.join(__dirname + '/clara.html'));
});

adminRotas.get('/gabriel', function(req, res) {
	res.sendFile(path.join(__dirname + '/gabriel.html'));
});

adminRotas.get('/miguel', function(req, res) {
  res.sendFile(path.join(__dirname + '/miguel.html'));
});

app.use('/fotos', adminRotas);
app.use('/', mainPage);

app.listen(process.env.PORT || 1337);
console.log('1337 is the magic port!');
