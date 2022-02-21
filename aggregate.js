const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


/*****************************/
//Define the catalog's CPU column names:
/*****************************/
let catalog ={
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
    ]
  };

/*****************************/
//Data load of technical specs:
/*****************************/
//CPUS:
//AMD:
let cpu_amd_raw = fs.readFileSync('data/specs/cpu/amd/data.json');
let cpu_amd = JSON.parse(cpu_amd_raw);
for (let obj of cpu_amd.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer" : "AMD",
      "Model" : obj["Model"],
      "Family" : obj["Family"],
      "Line" : obj["Line"],
      "CPU Socket" : obj["CPU Socket"],
      "Platform" : obj["Platform"],
      "Manufacturer Product ID" : obj["Product ID Tray"] +" "+ obj["Product ID Tray Boxed"] +" "+ obj["Product ID Tray MPK"],
      "Unlocked" : obj["Unlocked for Overclocking"],
      "Launch Date" : obj["Launch Date"],
      "CPU Cores" : obj["# of CPU Cores"],
      "CPU Threads" : obj["# of Threads"],
      // "P-core (performance) cores (threads)" : obj[""],
      // "P-core (performance) Freq." : obj[""],
      // "P-core (performance) Turbo" : obj[""],
      // "P-core (performance) L2 Cache" : obj[""],
      // "E-core (efficiency) cores (threads)" : obj[""],
      // "E-core (efficiency) Freq." : obj[""],
      // "E-core (efficiency) Turbo" : obj[""],
      // "E-core (efficiency) L2cache" : obj[""],
      // "Efficiency Cores" : obj[""],
      // "Performance Cores" : obj[""],
      "Graphic Cores" : obj["Graphics Core Count"],
      "Base Clock" : obj["Base Clock"],
      "Boost Clock" : obj["Max. Boost Clock ¹ ²"],
      // "Total Cache" : obj[""],
      "Total L1 Cache" : obj["Total L1 Cache"],
      "Total L2 Cache" : obj["Total L2 Cache"],
      "Total L3 Cache" : obj["Total L3 Cache"],
      // "L1 Cache Configuration" : obj[""],
      // "L2 Cache Configuration" : obj[""],
      // "L3 Cache Configuration" : obj[""],
      "Processor Technology for CPU Cores" : obj["Processor Technology for CPU Cores"],
      "PCI Express Version" : obj["PCI Express® Version"],
      // "PCI Lanes" : obj[""],
      "Default TDP" : obj["Default TDP"],
      // "Turbo TDP" : obj[""],
      "Maximum Temperature" : obj["Max. Operating Temperature (Tjmax)"],
      "OS Support" : obj["*OS Support"],
      "System Memory Specification" : obj["System Memory Specification"],
      "System Memory Type" : obj["System Memory Type"],
      "Memory Channels" : obj["Memory Channels"],
      // "Maximum Memory" : obj[""],
      "Graphics Frequency" : obj["Graphics Frequency"],
      "Integrated Graphics" : obj["Graphics Model"],
      "Supported Technologies" : obj["Supported Technologies"]
    } 
  )
}

//Intel:
//Laptop Processors:
let cpu_intel_laptop_raw = fs.readFileSync('data/specs/cpu/intel/intel_website/laptop.json');
let cpu_intel_laptop = JSON.parse(cpu_intel_laptop_raw);
for (let obj of cpu_intel_laptop.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer" : "Intel",
      "Model" : obj["Processor Number"],
      "Family" : obj["Intel® Core™ Generation"] + " Generation " + obj["Brand Identifier"],
      "Line" : obj["Brand Identifier"],
      // "CPU Socket" : obj[""],
      // "Platform" : obj[""],
      "Manufacturer Product ID" : obj[""],
      // "Unlocked" : obj[""],
      // "Launch Date" : obj[""],
      "CPU Cores" : obj["# cores"],
      "CPU Threads" : obj["# Threads"],
      "P-core (performance) cores (threads)" : obj["# of Performance-cores"],
      // "P-core (performance) Freq." : obj[""],
      // "P-core (performance) Turbo" : obj[""],
      "P-core (performance) L2 Cache" : obj[""],
      "E-core (efficiency) cores (threads)" : obj["# of Efficient-cores"],
      // "E-core (efficiency) Freq." : obj[""],
      // "E-core (efficiency) Turbo" : obj[""],
      // "E-core (efficiency) L2cache" : obj[""],
      // "Efficiency Cores" : obj[""],
      // "Performance Cores" : obj[""],
      // "Graphic Cores" : obj[""],
      // "Base Clock" : obj[""],
      "Boost Clock" : obj["Max Turbo Frequency"],
      "Total Cache" : obj["Cache"],
      // "Total L1 Cache" : obj[""],
      // "Total L2 Cache" : obj[""],
      // "Total L3 Cache" : obj[""],
      // "L1 Cache Configuration" : obj[""],
      // "L2 Cache Configuration" : obj[""],
      // "L3 Cache Configuration" : obj[""],
      "Processor Technology for CPU Cores" : obj[""],
      // "PCI Express Version" : obj[""],
      // "PCI Lanes" : obj[""],
      "Default TDP" : obj["Processor Base Power (previously known as TDP)"],
      // "Turbo TDP" : obj[""],
      // "AMD Configurable TDP (cTDP)" : obj[""],
      // "Maximum Temperature" : obj[""],
      // "OS Support" : obj[""],
      "System Memory Specification" : obj["Memory Types5"],
      // "System Memory Type" : obj[""],
      // "Memory Channels" : obj[""],
      "Maximum Memory" : obj["Max Memory Size (dependent on memory type)"],
      "Graphics Frequency" : obj["Graphics Max Dynamic Frequency"],
      "Integrated Graphics" : obj["Processor Graphics"],
      "Supported Technologies" : obj["Instruction Set Extensions"]
    }
  )
}

//Intel:
//Desktop Processors:
let cpu_intel_desktop_raw = fs.readFileSync('data/specs/cpu/intel/intel_website/desktop.json');
let cpu_intel_desktop = JSON.parse(cpu_intel_desktop_raw);
for (let obj of  cpu_intel_desktop.data){
  catalog.data.push(
    {
      "PCDBID" : uuidv4(),
      "Manufacturer" : "Intel",
      "Model" : obj["Processor Number"],
      "Family" : obj["Intel® Core™ Generation"] + " Generation " + obj["Brand Identifier"],
      "Line" : obj["Brand Identifier"],
      "CPU Socket" : obj["Supported Socket"],
      // "Platform" : obj[""],
      "Manufacturer Product ID" : obj[""],
      // "Unlocked" : obj[""],
      "Launch Date" : obj["Quarter Launch"] + " " + obj["Year launch"],
      "CPU Cores" : obj["# of Cores"],
      "CPU Threads" : obj["# of Threads"],
      "P-core (performance) cores (threads)" : obj["# of P-cores"],
      "P-core (performance) Freq." : obj["Performance-core Base Frequency (GHz)"],
      // "P-core (performance) Turbo" : obj[""],
      // "P-core (performance) L2 Cache" : obj[""],
      "E-core (efficiency) cores (threads)" : obj["# of E-cores"],
      "E-core (efficiency) Freq." : obj["Efficient-core Base Frequency (GHz)"],
      // "E-core (efficiency) Turbo" : obj[""],
      // "E-core (efficiency) L2cache" : obj[""],
      // "Efficiency Cores" : obj[""],
      // "Performance Cores" : obj[""],
      // "Graphic Cores" : obj[""],
      "Base Clock" : obj["Processor Base Frequency (GHz)"],
      "Boost Clock" : obj["Max Turbo Frequency (GHz)"],
      "Total Cache" : obj["Cache (MB)"],
      // "Total L1 Cache" : obj[""],
      // "Total L2 Cache" : obj[""],
      // "Total L3 Cache" : obj[""],
      // "L1 Cache Configuration" : obj[""],
      // "L2 Cache Configuration" : obj[""],
      // "L3 Cache Configuration" : obj[""],
      // "Processor Technology for CPU Cores" : obj[""],
      // "PCI Express Version" : obj[""],
      // "PCI Lanes" : obj[""],
      "Default TDP" : obj["Processor Base Power (previously Thermal Design Power (TDP)) (W)"],
      // "Turbo TDP" : obj[""],
      // "AMD Configurable TDP (cTDP)" : obj[""],
      // "Maximum Temperature" : obj[""],
      // "OS Support" : obj[""],
      "System Memory Specification" : obj["Memory Types"],
      // "System Memory Type" : obj[""],
      // "Memory Channels" : obj[""],
      "Maximum Memory" : obj["Max Memory Size (dependent on memory type) GB"],
      "Graphics Frequency" : obj["Graphics Max Dynamic Frequency (GHz)"],
      "Integrated Graphics" : obj["Intel® Processor Graphics"],
      // "Supported Technologies" : obj[""]
    }
  )
}

//Intel:
//Desktop Processors:
let cpu_intel_desktop_i9_07raw = fs.readFileSync('data/specs/cpu/intel/wikipedia/core-i9/desktop/07-Skylake-X/data.json');
let cpu_intel_desktop_i9_07 = JSON.parse(cpu_intel_desktop_i9_07raw);
for (let obj of  cpu_intel_desktop_i9_07.data){
  for (let searchObj of  catalog.data){
    if(searchObj["Model"] == obj["Modelnumber"]){
      console.log(searchObj["PCDBID"]);
      searchObj["Platform"] = cpu_intel_desktop_i9_07.meta.Name;
      searchObj["Base Clock"] = obj["Frequency"];
      searchObj["L2 Cache Configuration"] = obj["L2cache"];
      searchObj["L3 Cache Configuration"] = obj["L3cache"];
      searchObj[""] = obj[""];
      searchObj[""] = obj[""];
      searchObj[""] = obj[""];
      searchObj[""] = obj[""];
      searchObj[""] = obj[""];
      searchObj[""] = obj[""];

    }
  }

  // catalog.data.push(
  //   {
  //     // "Platform" : obj[""],
  //     // "Unlocked" : obj[""],
  //     // "P-core (performance) Turbo" : obj[""],
  //     // "P-core (performance) L2 Cache" : obj[""],
  //     // "E-core (efficiency) Turbo" : obj[""],
  //     // "E-core (efficiency) L2cache" : obj[""],
  //     // "Efficiency Cores" : obj[""],
  //     // "Performance Cores" : obj[""],
  //     // "Graphic Cores" : obj[""],
  //     // "Total L1 Cache" : obj[""],
  //     // "Total L2 Cache" : obj[""],
  //     // "Total L3 Cache" : obj[""],
  //     // "L1 Cache Configuration" : obj[""],
  //     // "L2 Cache Configuration" : obj[""],
  //     // "L3 Cache Configuration" : obj[""],
  //     // "Processor Technology for CPU Cores" : obj[""],
  //     // "PCI Express Version" : obj[""],
  //     // "PCI Lanes" : obj[""],
  //     // "Turbo TDP" : obj[""],
  //     // "AMD Configurable TDP (cTDP)" : obj[""],
  //     // "Maximum Temperature" : obj[""],
  //     // "OS Support" : obj[""],
  //     // "System Memory Type" : obj[""],
  //     // "Memory Channels" : obj[""],
  //     // "Supported Technologies" : obj[""]
  //   }
  // )
}



//console.log(catalog);



fs.writeFileSync('data/specs/combined.json', JSON.stringify(catalog));



console.log("hello");
