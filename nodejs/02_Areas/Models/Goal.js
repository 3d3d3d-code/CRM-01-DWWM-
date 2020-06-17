const Point = require("./Point");

class Goal extends Point {


    constructor(success) {

this.success = Boolean;

super(Point);

    }

    isSuccess (){


        return this.success;
    }

}
module.exports = Goal;