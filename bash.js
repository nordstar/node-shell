//Output a prompt

const pwd = require('./pwd.js');



process.stdout.write('prompt > ');

const path = require('path');
//import { cwd } from 'node:process';
// The stdin 'data' event fires after a user types in a line
const promptName = () =>{
  process.stdin.on('data',  (data) =>{
  let cmd =  data.toString().trim(); 
  
  pwd(cmd)
  })
}
promptName();  

 //console.log(`New directory: ${process.cwd()}`);
// if(cmd==='pwd') process.stdout.write('You typed: ' + process.cwd(cmd));

// else process.stdout.write('You typed this: ' + cmd);   

// process.stdout.write('\nprompt > ');
