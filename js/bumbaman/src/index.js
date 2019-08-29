const {Parser} = require('acorn');
const fs  = require('fs');

let script = process.argv[1];
if(process.argv.length < 3){
    console.log("Incorrect number of arguments passed");
}else{
    script = process.argv[2];
}

const ast = Parser.parse(fs.readFileSync(script).toString());

console.log(ast);