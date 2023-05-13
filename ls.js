const fs = require('fs');

// `files` will be an array of filenames, like ['bash.js', 'pwd.js']
 const ls = (done) =>{
  fs.readdir('./', 'utf8', (err, files) => {
   if (err) {
     throw err;
   } else {
     done(files.join('\n'));
     //process.stdout.write('prompt > ');
   }
 });
};
module.exports =ls;
// module.exports ={ls,};


//  module.exports = {
//   ls,
// };