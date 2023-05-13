
const fs = require('fs');

const cat = (done,filename) => {
   
   fs.readFile(filename , 'utf8', (err, data) => {
      if (err) {
         process.stdout.write(err.stack);
      } else {
        //process.stdout.write(data);
        done(data);
      }
    });


}

module.exports = cat;