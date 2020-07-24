const Employee = require ("./Models/Employee.js");

let emp = new Employee("reda", "hamza");

let changerNom = "jack";

emp.setFirstname(changerNom);

console.log(emp.getFirstname());

console.log(emp.getInfo());



console.log();



