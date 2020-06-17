const Point = require("./Point");

class Door extends Wall {

    constructor(isOpen) {
        this.isOpen = isOpen;


        super(Wall); //rajout en parametre lié au dossier parent
    }


    openClose() {

        if(this.isOpen === true){

            return true;
        }
        else false
        

    }




}
module.exports = Door;  


