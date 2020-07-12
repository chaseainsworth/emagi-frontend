const randomElement = require('./emagi-random.js');
const emagiSearch = require('./emagi-search.js');
const emagify = require('./emagify.js');
const symbols = require('./emagi-symbols');

let myArgs = process.argv.slice(2);

if (myArgs[0] === "search") {
    console.log(emagiSearch(myArgs[1]));
}

if (myArgs[0] === "convert") {
    console.log(emagify(myArgs.slice(1)).join(" "));
}

if (myArgs[0] === "random") {
    console.log(randomElement(symbols))
}
