class Employee {
    /** @var string firstname */
    #firstname;
    /**@var string lastname */
    #lastname;

    constructor(_firstname, _lastname) {
        this.#firstname = _firstname;
        this.#lastname = _lastname;

    }
    getFirstname() {


        return this.#firstname;
    }

    setFirstname(_firstname) {
        if (_firstname.length > 1) {

            this.#firstname = _firstname;
        }
    }
        getInfo()
        {
            return " Employee : " + this.#firstname + "  " + this.#lastname;
        }


    }


module.exports = Employee;