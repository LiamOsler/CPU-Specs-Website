# Hosted Version:
http://cpuspecs.liamosler.ca/

# If you just want the combined data as a JSON file:
https://github.com/LiamOsler/CPU-Specs-Website/blob/master/data/specs/combined.json
Massaging the data is an ongoing process

## Specification Data completeness:
- All AMD CPUs
- Intel Core i3/i5/i7/i9 Mobile and Desktop processors from 9th generation forward

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


# JSON definition explanation:
The row header contains the following definitions:

## Processors (CPUs):
```
"PCDBID" : A unique ID number generated for each item in the database
"Manufacturer" : The company which manufactured the particular CPU
"Model" : The model name and number, as designated by the manufacturer
"Family" : The family designation (if used by the manufacturer and designated - i.e. Ryzen, Threadripper, Core i3, Core i5)
"Line" : The line designation (if - i.e. "11th Generation Core i3 Mobile, 10th Generation Core i9 Desktop, Ryzen 7 Mobile, Ryzen 9 Desktop"
"CPU Socket" : Socket(s) physically supported by the CPU as designated by manufacturer
"Platform" : The platform designated by the manufacturer (i.e. Desktop, Mobile, Server, etc...)
"Manufacturer Product ID" : The product ID designated by the manufacturer
"Unlocked" : Support for overclocking (yes/no) from the manufacturer
"Launch Date" : Date made available for sale from the manufacturer
"CPU Cores", :
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
```

Note: where an item doesn't have a corresponding data definition, the pair value is either ```null``` or ```"undefined"```

### Other possible definitions for future addition:

Foundry : the particular details of the foundry/foundries where the CPU originated, including:
- Name
- Country


