var github = require('../src/githubHelper');

console.log(github.status());
console.log(github.add());
console.log(github.commit('test message'));
console.log(github.pull());
console.log(github.push());
console.log(github.rm('tmp.js'));


// 


var moment = require('moment');

console.log(moment().year());
console.log(moment().month());
console.log(moment().date());
console.log(moment().hour());
console.log(moment().minute());
console.log(moment().second());