const fs = require('fs')
let img;

fs.readFile('test.TIF', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data);
})

