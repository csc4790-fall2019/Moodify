
var express = require('express'); // Express web server framework
var cors = require('cors')
var app = express();
app.use(express.static(__dirname + '/public'))
	.use(cors());
console.log('Listening on 8888');
app.listen(8888);