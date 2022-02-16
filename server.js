const fs = require('fs');
var express = require('express');
var app = express();
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery'));
app.use('/@popperjs/', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/bootstrap/css/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/styles/', express.static(__dirname + '/styles'));
app.set('view engine', 'ejs');

let categoryData = fs.readFileSync('data/categories.json');
let categories = JSON.parse(categoryData);

// index page
app.get('/', function(req, res) {
  categories;
  res.render('pages/index',  {
    categories: categories
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(3000);
console.log('Server is listening on port 3000');