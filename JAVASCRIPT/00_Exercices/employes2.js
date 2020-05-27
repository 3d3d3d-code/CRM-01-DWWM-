class Employee
/**
 * il faut dábord construire le squelette de la classe
 * */ {
    constructor(id, lastname, firstname, role, salary, hiredate) {

        this.id = parseInt(id);// on s'assure du type de la valeur
        this.lastname = lastname || "";// le pipe sert a 
        this.firstname = firstname || "";
        this.role = role || "";
        this.salary = parseInt(salary);// on s'assure du type de valeur
        this.hiredate = hiredate;
        this.email = (firstname[0] + lastname).toLowerCase() + '@email.fr';

    }
    // LES METHODES

    //calcul du salaire mensuel net
    getMonthlySalary() {
        return (this.salary / 12 * 0, 75);
    }

    //calcul de lancienneté de l' employé
    getSenioryty() {
        let y = now.getYear() - this.hiredate.getYear();// difference entre  annee actuelle et annee d émbauche
        let m = now.getMonth() - this.hiredate.getMonth(); // difference entre  mois actuel et mois d embauche
        let d = now.getDay() - this.hiredate.getDay(); // difference entre  jour actuel et jour d embauche
        let result = "";

        if (m < 0) {


        }







    }

}

var employee1 = new Employee(1, 'Doe', 'John', 'manager', 122000, new Date('2020-12-28')); // création d'un nouvel employé 

console.log(Employee); // affichage du nouvel employé
const employees = [employee1];// creation du tableau employe
// creation des nouveaux employes
employees.push(
    new Employee(2, 'Tas', 'Toudy', 'manager', 82000, new Date('2014-10-18')),
    new Employee(3, 'Sac', 'Harry', 'epicier', 90000, new Date('2019-01-12')),
    new Employee(4, 'pakede', 'Pat', 'inventeur', 82000, new Date('2018-09-25')),
    new Employee(5, 'Saka', 'Viend', 'boucher', 1000, new Date('2017-11-17'))
);


console.log(employees);// export des nouveaux employes en console 
for (var i = 0; i < employees.length; i++) {
    console.log("Il y a " + employees.length + " employé(e)s.");//affichage du nombre d employes
}







