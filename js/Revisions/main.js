const Employee = require('./Models/Employee.js');
const Company = require('./Models/Company.js');
let emp = new Employee("reda", "hamza");

let changerNom = "jack";

emp.setFirstname(changerNom);

console.log(emp.getFirstname());

console.log(emp.getInfo());



console.log();

let ets = new Company();
let employees = ets.getEmployees();
employees.push(emp);
employees.push(new Enployee('aa','bb'));
emoployees = null;
console.log(ets.getEmployees());



