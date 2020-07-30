const Employee = require("./Employee");

class Company {
    /**
       @var employees[] employees
     */
    #employees;
    constructor() {

        this.#employees = [];


    }
    getEmployees() {

        return this.#employees;

    }

}
module.exports = Company;