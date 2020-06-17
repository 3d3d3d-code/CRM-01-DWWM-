class Wall extends Point {

    constructor(material) {
        this.material = material;

        super(Point); //rajout en parametre lié au dossier parent
    }

       getMaterial(){

        return this.material()
       }




}
module.exports =Wall;