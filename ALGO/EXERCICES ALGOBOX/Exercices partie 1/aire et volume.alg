<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="calcul de l'aire et du volume d'une sphere" courant="AFFICHER &quot; metres cube.&quot;"/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2etat="inactif" F2lignes="" F2para=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalBoucles="5000000" nbDecimales="8" arrondiAuto="vrai" totalAffichages="1000" maxBoucle="500000" epaisseurLigne="2" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="r EST_DU_TYPE NOMBRE" code="1#NOMBRE#r"/>
        <item algoitem="aire EST_DU_TYPE NOMBRE" code="1#NOMBRE#aire"/>
        <item algoitem="volume EST_DU_TYPE NOMBRE" code="1#NOMBRE#volume"/>
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE r" code="2#r#pasliste"/>
        <item algoitem="aire PREND_LA_VALEUR 4*pow(r,r)* Math.PI" code="5#aire#4*pow(r,r)* Math.PI#pasliste"/>
        <item algoitem="AFFICHER &quot; l aire de la sphere est de &quot;" code="4# l aire de la sphere est de #0"/>
        <item algoitem="AFFICHER aire" code="3#aire#0#pasliste"/>
        <item algoitem="AFFICHER &quot; metres carres .&quot;" code="4# metres carres .#0"/>
        <item algoitem="LIRE a" code="2#a#pasliste"/>
        <item algoitem="volume PREND_LA_VALEUR 4/3*Math.PI*pow(r,r,r)" code="5#volume#4/3*Math.PI*pow(r,r,r)#pasliste"/>
        <item algoitem="AFFICHER &quot;le volume de la sphere est de &quot;" code="4#le volume de la sphere est de #0"/>
        <item algoitem="AFFICHER volume" code="3#volume#0#pasliste"/>
        <item algoitem="AFFICHER &quot; metres cube.&quot;" code="4# metres cube.#0"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
