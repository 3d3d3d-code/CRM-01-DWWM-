



const Employee = require('./Employee');

const Enterprise = require('./Enterprise');


var employee1 = new Employee(4, 'B', 'Tim', 'Pâtissier', 50000, new Date('2019-03-18'));
//var employee2 = new Employee();

var employee2 = new Employee(6, 'E', 'Gabi', 'Programer', 1000000, new Date('2020-05-27'));

var enterprise = new Enterprise();

enterprise.create(employee1);
enterprise.create(employee2);

console.log();

console.log();

enterprise.read(6);
















/*const f = require('f/');
const f = require('./functions');
const f2 = require('./functions2');
let result = f(9, 2);
let test = f2(3, 3);
console.log();
f.f();*/

