const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const compression = require('compression')

let express = require('express');
let app = express();
app.use(compression());

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

eval(fs.readFileSync('data.js')+'');


let catalog ={
  "header": [
    [
      "PCDBID",
      "Manufacturer",
      "Model",
      "Family",
      "Line",
      "Platform",
      "Launch Date",
      "CPU Cores",
      "CPU Socket",
      "Threads",
      "Base Clock",
      "Boost Clock",
      "Total Cache",
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
      "Max Memory",
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
for (let obj of cpu_amd.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer": "AMD",
      "Model" : obj["Model"],
      "Family" : obj["Family"],
      "Line" : obj["Line"],
      "Platform" : obj["Platform"],
      "Launch Date" : obj["Launch Date"],
      "CPU Cores" : obj["# of CPU Cores"],
      "CPU Socket" : obj["CPU Socket"],
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

//Intel:
//Laptop Processors:
let cpu_intel_laptop_raw = fs.readFileSync('data/specs/cpu/intel/website/laptop.json');
let cpu_intel_laptop = JSON.parse(cpu_intel_laptop_raw);
for (let obj of cpu_intel_laptop.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer": "Intel",
      "Platform" : "Laptop",
      "Model" : obj["Processor Number"],
      "Family" : obj["Intel® Core™ Generation"] + " Generation",
      "Line" : obj["Brand Identifier"],
      "Launch Date" : obj["Year Launched"],
      "CPU Cores" : obj["# cores"],
      "Threads" : obj["# Threads"],
      "Base Clock" : obj["Base Clock"],
      "Boost Clock" : obj["Max Turbo Frequency"],
      "Total Cache" : obj["Cache"],
      "Default TDP" : obj["Processor Base Power (previously known as TDP)"],
      "Max Memory" : obj["Max Memory Size (dependent on memory type)"],
      "System Memory Type" : obj["Memory Types5"],
      "Graphics Frequency" : obj["Graphics Max Dynamic Frequency"],
      "Integrated Graphics" : obj["Processor Graphics"],
      "Supported Technologies" : obj["Instruction Set Extensions"]
    } 
  )
}

//Intel:
//Desktop Processors:
let cpu_intel_desktop_raw = fs.readFileSync('data/specs/cpu/intel/website/desktop.json');
let cpu_intel_desktop = JSON.parse(cpu_intel_desktop_raw);
for (let obj of  cpu_intel_desktop.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer": "Intel",
      "Platform" : "Desktop",
      "Model" : obj["Processor Number"],
      "Family" : obj["Intel® Core™ Generation"] + " Generation",
      "Line" : obj["Brand Modifier"],
      "Launch Date" : obj["Year launch"],
      "CPU Cores" : obj["# of Cores"],
      "CPU Socket" : obj["Supported Socket"],
      "Threads" : obj["# of Threads"],
      "Base Clock" : obj["Performance-core Base Frequency (GHz)"],
      "Boost Clock" : obj["Max Turbo Frequency (GHz)"],
      "Total Cache" : obj["Cache (MB)"],
      "Default TDP" : obj["Processor Base Power (previously Thermal Design Power (TDP)) (W)"],
      "Max Memory" : obj["Max Memory Size (dependent on memory type) GB"],
      "System Memory Type" : obj["Memory Types"],
      "Integrated Graphics" : obj["Intel® Processor Graphics"],
      "Graphics Frequency" : obj["Graphics Max Dynamic Frequency (GHz)"]
    } 
  )
}

console.log("hello");



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