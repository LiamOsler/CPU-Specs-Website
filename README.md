# Hosted Version:
http://cpuspecs.liamosler.ca/

### Data:
https://github.com/LiamOsler/CPU-Specs-Website/blob/master/data/specs/combined.json
Massaging this data is an ongoing process

### Completeness:
- Most AMD CPUs
- Intel Core i3/i5/i7/i9 Mobile and Desktop processors from 9th generation and after

### Next Steps:
- Intel Core CPUs pre-9th generation
- Apple Silicon
- Historical CPUs

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
        
    
    
# JSON definitions explanation:
The row header contains the following definitions:

## Processors (CPUs):
```js
//Short Name:                           // Verbose description:
"PCDBID" ,                              // A unique ID number generated for each item in the database
"Manufacturer" ,                        // The company which manufactured the CPU
"Model" ,                               // The model name and number designated by the manufacturer
"Family" ,                              // The family designation (if used by the manufacturer and designated - i.e. Ryzen, Threadripper, Core i3, Core i5)
"Line" ,                                // The line designation (if - i.e. "11th Generation Core i3 Mobile, Ryzen 7 Mobile"
"CPU Socket" ,                          // Socket(s) physically supported by the CPU
"Platform" ,                            // The platform designated by the manufacturer (i.e. Desktop, Mobile, Server, etc...)
"Manufacturer Product ID" ,             // The product ID designated by the manufacturer
"Unlocked" ,                            // Support for overclocking (yes/no) from the manufacturer
"Launch Date"                           // Date made available for sale from the manufacturer
"CPU Cores",                            // The total count of CPU Cores (both performance and efficiency cores)
"CPU Threads",                          // The total count of threads across all cores
"P-core cores (threads)",               // Performance core thread count (Intel)
"P-core Freq.",                         // Performance core default frequency (Intel)
"P-core Turbo",                         // Performance core turbo frequency (Intel)
"P-core L2 Cache",                      // Performance core L2 cache (Intel)
"E-core cores (threads)",               // Efficiency core thread count (Intel)
"E-core Freq.",                         // Efficiency core default frequency (Intel)
"E-core Turbo",                         // Efficiency core turbo frequency (Intel)
"E-core L2 Cache",                      // Efficiency core L2 cache (Intel)
"Efficiency Cores",                     // Efficiency core count (Intel)
"Performance Cores",                    // The total count of performance cores (Intel)
"Graphic Cores",                        // Count of dedicated graphics cores (Intel)
"Base Clock",                           // The base clock speed of the fastest core (does not include CPUs with efficiency/performance cores) (Intel)
"Boost Clock",                          // The boost clock speed of the fastest core (does not include CPUs with efficiency/performance cores) (Intel)
"Total Cache (AMD)",                    // Total cache across all levels/cores/threads for AMD processors
"Total L1 Cache (AMD)",                 // Total L1 Cache amount across all cores/threads for AMD processors
"Total L2 Cache (AMD)",                 // Total L2 Cache amount across all cores/threads for AMD processors
"Total L3 Cache (AMD)",                 // Total L3 Cache amount across all cores/threads for AMD processors
"L1 Cache Configuration (AMD)",         // The details of the L1 cache configuration for AMD processors
"L2 Cache Configuration (AMD)",         // The details of the L2 cache configuration for AMD processors
"L3 Cache Configuration (AMD)",         // The details of the L3 cache configuration for AMD processors
"Total Cache (Intel)",                  // Total cache across all levels/cores/threads for Intel processors
"Total L1 Cache (Intel)",               // Total L1 Cache amount across all cores/threads for Intel processors
"Total L2 Cache (Intel)",               // Total L2 Cache amount across all cores/threads for Intel processors
"Total L3 Cache (Intel)",               // Total L3 Cache amount across all cores/threads for Intel processors
"L1 Cache Configuration (Intel)",       // The details of the L1 cache configuration for AMD processors
"L2 Cache Configuration (Intel)",       // The details of the L2 cache configuration for AMD processors
"L3 Cache Configuration (Intel)",       // The details of the L3 cache configuration for AMD processors
"Processor Technology for CPU Cores",   // The manufacturer's name for the processor technology with regards to the architecture of the processor's cores
"PCI Express Version",                  // The highest version of PCI Express supported by the processor
"PCI Lanes",                            // The maximum number of PCI Lanes available to the processor 
"Default TDP",                          // The default thermal design power (TDP) of the processor at its base frequency
"Turbo TDP",                            // The default thermal design power (TDP) of the processor at its boost
"Configurable TDP (cTDP) (AMD)",        // The configurable TDP (cTDP) of the processor for AMD processors
"Maximum Temperature",                  // The maximum safe operating temperature of the processor
"OS Support",                           // List of operating systems officially supported by the manufacturer
"System Memory Specification",          // Details of the system's memory configuration 
"System Memory Type",                   // The type of memory supported 
"Memory Channels",                      // The maximum number of usable memory channels
"Maximum Memory",                       // The maximum memory amounts supported by the processor
"Graphics Frequency",                   // The graphics frequency
"Integrated Graphics",                  // Does the processor has support for integrated graphics processing
"Supported Technologies"                // Detailed list of technologies supported by the processor, as designated by the manufacturer
```

Note: where an item doesn't have a corresponding data definition, the pair values are either ```null```, ```"undefined"``` or ```"N/A"``` at this time

