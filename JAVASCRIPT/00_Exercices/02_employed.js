
class Employee {


    constructor(id, lastname, firstname, email, role, salary, hiredate) {
        this.id = parseInt(id); // NaN
        this.lastname = lastname || "Ano";
        this.firstname = firstname || "Nymous";

        this.role = role || "Boulanger";
        this.salary = parseInt(salary);
        this.hiredate = hiredate;

        this.email = (lastname[0] + firstname).toLowerCase() + '@email.fr';

    }

    getMonthSalary() {

        // SALAIRE MENSUEL = SALAIRE ANNUEL /12 
        return Math.round((this.salary / 12) * 0.75);

    }
    getSeniorty() {

        let now = new Date();
        let embaucheDate = this.hiredate;
        let diff = now.getTime() - embaucheDate.getTime();
        diff = Math.floor(1000*60*60*24)
        let ans = Math.floor(diff / 365);
            
        diff = diff - ans * 365;
    }

    getSeniorty() {

        let now = new Date();
let y = now.getFullYear( ) - this.hiredate.getFullYear(); // annees
let m = now.getMonth - this.hiredate.getMonth(); // mois
let d = now.getDate() - this.hiredate.getMonth(); // jour
let result;

        }

}








var employee1 = new Employee(1, 'Doe', 'John', ' ', 'manager', 82000, new Date('2020-12-28'));

console.log(employee1);
var employees = [employee1];
console.log();

var employee2 = new Employee(2, 'Jean', 'Passe', '', 'winner', 95000, new Date('2021-10-17'));
employees.push(employee2);
console.log(employee2);
var employee3 = new Employee(3, 'Punchy', 'Line', '', 'faineant', 12000, new Date('2020-12-28'));
employees.push(employee3);

var employee4 = new Employee(4, 'Pro', 'Fitter', ' ', 'manager', 56000, new Date('2020-12-28'));
employees.push(employee4);
var employee5 = new Employee(5, 'What', 'Happened', '', 'skieur', 87000, new Date('2020-12-28'));
employees.push(employee5);
for (var i = 0; i < employees.length; i++) {
    console.log("Il y a " + employees.length + " employé(e)s.");
}
console.log();
for (var i = 0; i < employees.length; i++) {

    console.log('les employes se nomment :', employees[i].firstname);
    //  console.log('le salaire le plus bas est celui de :', Math.min(salary[i].firstname));
}

console.log(employees);

/*  function getLittleSalary() {

     return Math.min(firstname.salary);

 }*/

























































//const employes = [employe1];
//console.log(employes.length);

/*function getEmail(){
var email = browserType.slice(0,3);
console.log(email)
}

console.log (getEmail);

function convert () {

    var conversion = parsIntello;

    console.log(parsIntello);

}


function getMonthSalary(){

    var MonthSalary = salary / (12 * 0.75);
console.log(MonthSalary)   ;

}


console.log(getSeniorty);



for( var i = 0;i<Employe.length;i++)

console.log();*/



