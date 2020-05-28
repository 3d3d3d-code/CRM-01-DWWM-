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

        if (m < 0) { // si le mois actuel est inferieur au mois a deduire (le mois de la date d embauche)

            y--; //on deduit un an
            m += 12; // et l on rajoute 12 au mois actuel



        } if (d < 0) {      //si le jour actuel est inferieur au jour a deduire
            m--;//on deduit un mois
            d = Math.floor(d + 365.25 / 12); //on rajoute au jour le nombre de jours que l on a dans un mois

        }
        if (y > 0) { // si l annnee actuelle est superieure a l année d embauche

            result += y + "ännée(s)";
        }
        if (m > 0) {// si le mois actuel est superieur au mois d embauche 

            result += m + "mois";

        }
        if (d > 0) { // si le jour actuel est superieur au jour d'embauche 
            result += + "jour(s)";

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

// creer les fonctions de tri

var sortDate = function (a, b) { // fonction de tri date ,comparaison

    return a.hiredate - b.hiredate;
}

var sortSalary = function (a, b) {// fonction de tri salaire ,comparaison

    return a.salary - b.salary;
}

employees.sort(sortDate);                 //employe le plus ancien grace a la fonction de tri
let empAncien = employees[0];// le tri etant dans l ordre croissant,la premiere etant la plus ancienne
console.log(empAncien);    // affichage

employees.sort(sortSalary);

let bestSalary = employees[employees.length - 1]; // plus gros salaire
let littleSalary = employees[0];// plus petit salaire
console.log(bestSalary, littleSalary); // affichege des 2
console.log("la difference de salaire est de : " + (bestSalary - littleSalary));


















