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

# Data definitions:
## CPU Data sample JSON:
```js
let cpu_catalog ={
    "header": [
      [
        "PCDBID",
        "Manufacturer",
        "Model",
        "Family",
        "Line",
        "CPU Socket",
        "Platform",
        "Manufacturer Product ID",
        "Unlocked",
        "Launch Date",
        "CPU Cores",
        "CPU Threads",
        "P-core (performance) cores (threads)",
        "P-core (performance) Freq.",
        "P-core (performance) Turbo",
        "P-core (performance) L2 Cache",
        "E-core (efficiency) cores (threads)",
        "E-core (efficiency) Freq.",
        "E-core (efficiency) Turbo",
        "E-core (efficiency) L2cache",
        "Efficiency Cores",
        "Performance Cores",
        "Graphic Cores",
        "Base Clock",
        "Boost Clock",
        "Total Cache",
        "Total L1 Cache",
        "Total L2 Cache",
        "Total L3 Cache",
        "L1 Cache Configuration",
        "L2 Cache Configuration",
        "L3 Cache Configuration",
        "Processor Technology for CPU Cores",
        "PCI Express Version",
        "PCI Lanes",
        "Default TDP",
        "Turbo TDP",
        "AMD Configurable TDP (cTDP)",
        "Maximum Temperature",
        "OS Support",
        "System Memory Specification",
        "System Memory Type",
        "Memory Channels",
        "Maximum Memory",
        "Graphics Frequency",
        "Integrated Graphics",
        "Supported Technologies"
      ]
    ],
    "data": [
      {"PCDBID" : "pair" ...},
      ...
      {"PCDBID" : "pair" ...}
    ]
  };
```

<h1>Data Sources</h1>
<h2>CPUs:</h2>
    <h2>Manufacturer Data:</h2>
    <h2>AMD:</h2>
        <a href = "https://www.amd.com/en/products/specifications/processors">https://www.amd.com/en/products/specifications/processors</a>
    <h2>Intel:</h2>
        <p>Desktop:
            <a href = "https://www.intel.ca/content/www/ca/en/support/articles/000005505/processors.html">https://www.intel.ca/content/www/ca/en/support/articles/000005505/processors.html</a>
        </p>
        <p>Laptops:
            <a href = "https://www.intel.ca/content/www/ca/en/support/articles/000028083/processors.html">https://www.intel.ca/content/www/ca/en/support/articles/000028083/processors.html</a>
        </p>
        <p>Wikipedia:<w/p>
        <a href = "https://en.wikipedia.org/wiki/List_of_Intel_Core_i3_processors" > https://en.wikipedia.org/wiki/List_of_Intel_Core_i3_processors</a>
        <a href = "https://en.wikipedia.org/wiki/List_of_Intel_Core_i5_processors" > https://en.wikipedia.org/wiki/List_of_Intel_Core_i5_processors</a>
        <a href = "https://en.wikipedia.org/wiki/List_of_Intel_Core_i7_processors" > https://en.wikipedia.org/wiki/List_of_Intel_Core_i7_processors</a>
        <a href = "https://en.wikipedia.org/wiki/List_of_Intel_Core_i9_processors" > https://en.wikipedia.org/wiki/List_of_Intel_Core_i9_processors</a>
        
<hr>
<h2>GPUs:</h2>
    <h2>Manufacturer Data</h2>
    <h2>AMD:</h2>
        <a href = "https://www.amd.com/en/products/specifications/graphics">https://www.amd.com/en/products/specifications/graphics</a>
    <p></p>
