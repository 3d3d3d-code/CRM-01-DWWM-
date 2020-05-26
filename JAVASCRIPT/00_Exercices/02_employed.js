














class Employee {


    constructor(id, lastname, firstname, email, role, salary, hiredate) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.role = role;
        this.salary = salary;
        this.hiredate = hiredate;
    }
}


var employee1 = new Employee(1, 'Doe', 'John', '', 'manager', 82000, new Date('2020-12-28'));
console.log(employee1);


const employees = [employee1];



var employee2 = new Employee(2, 'Jean', 'Passe','Doe@aol.com', 'dessinateur', 95000, new Date('2021-10-17'));
var employee3 = new Employee(3, 'Punchy', 'Line', 'Doe@aol.com','manager', 82000, new Date('2020-12-28'));
var employee4 = new Employee(4, 'Doe', 'John', 'Doe@aol.com','manager', 82000, new Date('2020-12-28'));
var employee4 = new Employee(5, 'What', 'John','Doe@aol.com', 'manager', 82000, new Date('2020-12-28'));

console.log("Il y a " + employees.length + " employé(e)s.");

/*function getEmail(){
    var email = browserType.slice(0,3);
    console.log(email)



  


/*function getMonthSalary() {

    var MonthSalary = salary / (12 * 0.75);
    console.log(MonthSalary);

}

function getSeniorty() {


    var seniority = hiredate - date;
    console.log(seniority());


}


/*function getBestSalary(){

var bestSalary = salary.length;

}
Console.log(salary);


//*/















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



