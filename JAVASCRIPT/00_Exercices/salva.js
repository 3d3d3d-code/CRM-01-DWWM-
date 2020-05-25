function Personne(nom) {
    this.nom = nom;
    this.salutation = function() {
      console.log('Bonjour ! Je m\'appelle ' + this.nom + '.');
     
    };
  }
  var personne1 = new Personne('bob');
