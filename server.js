const fs = require('fs');
let express = require('express');
let app = express();

//Express routing for required styles and js:
app.use('/jquery/', express.static(__dirname + '/node_modules/jquery'));
app.use('/@popperjs/', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/bootstrap/css/', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js/', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/datatables/js/', express.static(__dirname + '/node_modules/datatables/media/js'));
app.use('/datatables/css/', express.static(__dirname + '/node_modules/datatables/media/css'));
app.use('/datatables/images/', express.static(__dirname + '/node_modules/datatables/media/images'));
app.use('/styles/', express.static(__dirname + '/styles'));
app.set('view engine', 'ejs');

//JSON for keeping track of the categorization of the webpage:
let categoryData = fs.readFileSync('data/categories.json');
let categories = JSON.parse(categoryData);

let catalog ={
  "header": [
    [
      "Model",
      "Family",
      "Line",
      "Platform",
      "Product ID Tray",
      "Product ID Boxed",
      "Product ID MPK",
      "Launch Date",
      "CPU Cores",
      "Threads",
      "Base Clock",
      "Boost Clock",
      "Total L1 Cache",
      "Total L2 Cache",
      "Total L3 Cache",
      "Unlocked",
      "Processor Technology for CPU Cores",
      "CPU Socket",
      "Socket Count",
      "PCI Express Version",
      "Default TDP",
      "(Tjmax)",
      "OS Support",
      "System Memory Specification",
      "System Memory Type",
      "Memory Channels",
      "Graphics Frequency",
      "Integrated Graphics",
      "Supported Technologies"
    ]
  ],
  "data": [
  ]
};

//Data load of technical specs:
//CPUS:
//AMD:
let cpu_amd_raw = fs.readFileSync('data/specs/cpu/amd/data.json');
let cpu_amd = JSON.parse(cpu_amd_raw);

for (let i = 0; i < cpu_amd.data.length; i++){
  let obj = cpu_amd.data[i];
  catalog.data.push(
    {
      "Model" : obj["Model"],
      "Family" : obj["Family"],
      "Line" : obj["Line"],
      "Platform" : obj["Platform"],
      "Product ID Tray" : obj["Product ID Tray"],
      "Product ID Boxed" : obj["Product ID Boxed"],
      "Product ID MPK" : obj["Product ID MPK"],
      "Launch Date" : obj["Launch Date"],
      "CPU Cores" : obj["# of CPU Cores"],
      "Threads" : obj["# of Threads"],
      "Base Clock" : obj["Base Clock"],
      "Boost Clock" : obj["Max. Boost Clock ¹ ²"],
      "Total L1 Cache" : obj["Total L1 Cache"],
      "Total L2 Cache" : obj["Total L2 Cache"],
      "Total L3 Cache" : obj["Total L3 Cache"],
      "Unlocked" : obj["Unlocked for Overclocking"],
      "Processor Technology for CPU Cores" : obj["Processor Technology for CPU Cores"],
      "CPU Socket" : obj["CPU Socket"],
      "Socket Count" : obj["Socket Count"],
      "PCI Express Version" : obj["PCI Express® Version"],
      "Default TDP" : obj["Default TDP"],
      "Max Temperature" : obj["Max. Operating Temperature (Tjmax)"],
      "OS Support" : obj["*OS Support"],
      "System Memory Specification" : obj["System Memory Specification"],
      "System Memory Type" : obj["System Memory Type"],
      "Memory Channels" : obj["Memory Channels"],
      "Graphics Frequency" : obj["Graphics Frequency"],
      "Integrated Graphics" : obj["Graphics Model"],
      "Supported Technologies" : obj["Supported Technologies"]
    } 
  )
}
console.log("hello");

console.log(catalog.data);


//Page Structure:
// index page
app.get('/', function(req, res) {
  categories;
  res.render('pages/index',  {
    categories: categories
  });
});

// sources page
app.get('/sources/', function(req, res) {
  categories;
  res.render('pages/sources',  {
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