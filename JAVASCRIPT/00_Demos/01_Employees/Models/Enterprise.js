

const Employee = require('./Employee');

/**
 * Gestion d'employés
 */
class Enterprise {
    constructor() {
        this.employees = [];
    }

    /**
     * 
     * @param  _filter 
     */
    readAll(_filter) {
        const newEmployees = employee.filter(employee => {
            return employee.getHigherSalary ;

            
        })
        console.log(_employee);

    }


    /**
     * Créer un employé
     * @param Employee _employee 
     */
    create(_employee) {
        this.employees.push(_employee);
        //console.log('push ', employee);
        console.log(this);

    }

    /**
     * 
     * @param int _id 
     */
    read(_id) {
for (var i =0;i<employee.length;i++)
 
 return _employee[i](_id);
    }

    /**
     * Met à jour un employé
     * @param Employee _employee 
     */
    update(_employee) {

this.employee.update(employee);
console.log()
    }

    /**
     * Supprime un employé
     * @param int _id 
     */
    delete(_id) {

    }


    /**
     * 
     */
    getHigherSalary() {
return employee.getHigherSalary

    }
    

    /**
     * 
     */
    getLowerSalary() {
        return employee.getLowerSalary

    }

    /**
     * 
     */
    getSalaryGap() {

    }






}


module.exports = Enterprise;




