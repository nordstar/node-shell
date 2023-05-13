//Output a prompt

const pwd = require('./pwd.js');

const ls = require('./ls.js');
const cat = require('./cat.js');
const date = require('./date.js');


process.stdout.write('prompt > ');

const path = require('path');
//import { cwd } from 'node:process';
// The stdin 'data' event fires after a user types in a line

const done = (output) => {
  // show the output
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
};

//const promptName = () =>{
  process.stdin.on('data',  (data) =>{
  const entry =  data.toString().trim(); 
  const [cmd, arg] = entry.split(" ");

  switch (cmd){
    case "ls":
      ls(done);
      break;
    case "pwd":
      pwd(done);
      break;l
    case "cat":
      cat(done, arg);
      break;
    case "date":
      date(done);
      break;

  }

//process.stdout.write("\nprompt > ");
  });

//promptName();  


