
class Employee {


    constructor(id, lastname, firstname, email, role, salary, hiredate) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = (lastname.substring(0, 1) + firstname.substring(0, 1)).toLowerCase();
        this.role = role;
        this.salary = salary;
        this.hiredate = hiredate;
    }



    function(getMonthSalary) {

        return Math.round((this.salary / 12) * 0.75);

    }

    function(getSeniorty) {


        var seniority = hiredate - date;
        console.log(seniority);


    }
    function(getLittleSalary) {

        return Math.min(firstname.salary);

    }





}


var employee1 = new Employee(1, 'Doe', 'John', '', 'manager', 82000, new Date('2020-12-28'));

console.log(employee1);
var employees = [employee1];
console.log();

var employee2 = new Employee(2, 'Jean', 'Passe', '', 'winner', 95000, new Date('2021-10-17'));
employees.push(employee2);
console.log(employee2);
var employee3 = new Employee(3, 'Punchy', 'Line', '', 'faineant', 12000, new Date('2020-12-28'));
employees.push(employee3);

var employee4 = new Employee(4, 'Pro', 'Fitter', '', 'manager', 56000, new Date('2020-12-28'));
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



