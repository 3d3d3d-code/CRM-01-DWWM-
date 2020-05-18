let choix_joueur;// undefined
let choix_ia = 0;
let score_joueur = 0;
let score_ia = 0;


do {


    choix_ia = Math.round(Math.random()) * 2;  // random
    choix_joueur = `saisie utilisateur`;  // on voit plus tard il faut charger le module grace a node js
if(choix_joueur<0){
    console.log(`le joueur souhaite arreter`)

}
else{

    if ((choix_joueur - choix_ia) === 2) {
score_ia += 1;
    }
else if((choix_joueur - choix_ia) === 2){
score_joueur += 1;


if ((choix_ia - choix_joueur) === 1 ) {
    score_ia += 1;
        }
    else if((choix_ia - choix_joueur) === 1 ){
    score_joueur += 1 ;
    }else{

        console.log(`aucun point attribue`)
    }

}
}
}

while (score_ia < 10 && score_joueur < 10 && score_joueur>= 0);
