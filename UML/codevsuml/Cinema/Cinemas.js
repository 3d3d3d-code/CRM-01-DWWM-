class salle
{


}

class Cinema{

    #salles

    constructor()
    {
        this.#salles = [];  
        this.#salles.push(_salle);
    }
}
// en dehors de l application

let salle = new Salle();
let cinema = new Cinema(_salle); // injection de dependance(design pattern)