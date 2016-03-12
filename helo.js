#!/usr/bin/node
console.log('Hello world');

var fs = require('fs');
var outfile = "hello.txt";
var out = "writing something to file.\n"
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
