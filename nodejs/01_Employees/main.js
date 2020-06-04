const Employee = require ('./Models/Employee.js');
const Enterprise = require('./Models/Enterprise');


var employe1 = new Employee(1, 'john', 'Mike', 'DWWM', 50000, new Date());
//var Employe2 = new Employee(2, 'Gaby', 'Crouzet', 'gamer', 600000, new Date());
//var employe3 = new Employee(3, 'Reda', 'Hamza', 'cdd', 20000, new Date());
const ets = new Enterprise();

ets.create(employe1);
ets.create(Employe2);
ets.create(new Employee(2, 'Gaby', 'Crouzet', 'gamer', 600000, new Date()));
ets.create(employe3);
ets.create(new Employee(3, 'Reda', 'Hamza', 'cdd', 20000, new Date()));


let monFiltre = emp => emp.hiredate > new Date();

let r1 = ets.readAll(monFiltre);
let r2 = ets.readAll(emp => emp.hiredate < new Date());

console.log(r1);
console.log(r2);
//console.log(rambo);


let myEmployee = ets.read(2);

myEmployee.firstname = "Gaby";

ets.update(myEmployee);


myEmployee2 = new Employee();

ets.update(myEmployee2);


console.log();