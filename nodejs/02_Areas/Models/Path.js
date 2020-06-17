class Path extends Point {


    constructor(player, nbPassages) {

        this.player = player;
        this.nbPassage = nbPassages;

        super(Point); //rajout en parametre lié au dossier parent
    }

    isPlayer() {


        return this.player;

 }
 setPlayer(){

     this.player = nPlayer;
 }


 
     getNbPassage(){

        return this.getNbPassage;
     }

     setNbPassages(){

        this.getNbPassage = nNbrePassages;
     }

}
module.exports = Path;