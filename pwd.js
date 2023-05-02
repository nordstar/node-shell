const ls = require('./ls.js');

module.exports = (cmd) =>{

if(cmd==='pwd') process.stdout.write('You typed: ' + process.cwd(cmd));
else if (cmd==='ls'){ process.stdout.write('You typed this: ' ls);   
}

else process.stdout.write('You typed this: ' + cmd);   

process.stdout.write('\nprompt > ');

}