const { addBlock } = require("./blockchain/addBlock");

let newCoint = addBlock({ index: 1, name: "colo", cantidad: 100 });

if (!newCoint) return console.log("ocurrio un error");

console.log(JSON.stringify(newCoint, null, 4));
