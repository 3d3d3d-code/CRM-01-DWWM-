


const semver = require("semver");
// ou bien  import semver from "semver";







console.log("hello world");

let  v = "1.2.3";
let testVersion = semver.parse(v);// analyser le numero de version

let testVersion2 = semver.satisfies('7.3.2', ' ^7.3.2' ); // version npm comparee a 


console.log();