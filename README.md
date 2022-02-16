Getting started:

The server.js file:
```js
var express = require('express');
var app = express();
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery'));
app.use('/@popperjs/', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/bootstrap/css/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/styles/', express.static(__dirname + '/styles'));
// set the view engine to ejs
app.set('view engine', 'ejs');


// index page
app.get('/', function(req, res) {
  res.render('pages/index',  {});
});

app.listen(3000);
console.log('Server is listening on port 3000');
```