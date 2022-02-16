const fs = require('fs');
let express = require('express');

let app = express();
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery'));
app.use('/@popperjs/', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/bootstrap/css/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/datatables/js/', express.static(__dirname + '/node_modules/datatables/media/js'));
app.use('/datatables/css/', express.static(__dirname + '/node_modules/datatables/media/css'));
app.use('/datatables/images/', express.static(__dirname + '/node_modules/datatables/media/images'));
app.use('/styles/', express.static(__dirname + '/styles'));
app.set('view engine', 'ejs');

let categoryData = fs.readFileSync('data/categories.json');
let categories = JSON.parse(categoryData);

let catalogData = fs.readFileSync('data/ryzen.json');
let catalog = JSON.parse(catalogData);

console.log(catalog.data[1]);


// index page
app.get('/', function(req, res) {
  categories;
  res.render('pages/index',  {
    categories: categories
  });
});

app.get('/catalog/', function(req, res) {
  categories;
  catalog;
  res.render('pages/catalog',  {
    categories: categories,
    catalog: catalog
  });
});

app.get('/catalog/:query', function (req, res){
  categories;
  catalog;
  let searchQuery = req.params;
  res.render('pages/catalog',  {
    searchQuery: searchQuery,
    categories : categories,
    catalog: catalog
  });
});


app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(3000);
console.log('Server is listening on port 3000');