'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var e = new Engine();

PalettoTestCase.prototype.testStory1 = function () {

    e.initPlateau();
    for(var i=0; i<6; i++){
        for(var j=0; j<6; j++){
            var t = e.getTab()[i][j];
            assertTrue(e.testJuxta(i,j));
        }
    }

};

PalettoTestCase.prototype.testStory2 = function () {

    assertTrue(e.getColor("A6") === e.enumPion.JAUNE);
    e.choose(1,"A6");
    assertTrue(e.getJoueur1()[0] === e.enumPion.JAUNE);

};

PalettoTestCase.prototype.testStory3 = function () {

    e.retirePiece("A6");
    assertTrue(e.getColor("A6") === e.enumPion.VIDE);
    assertTrue(e.getNbPieces() === 35);

};

PalettoTestCase.prototype.testStory4 = function () {
    var erreur = 0;
    var piece_dispo = e.getPiecesPrenables();
    for(var i=0; i<piece_dispo.length; i++){
        if (e.getColor(piece_dispo[i]) !==  e.enumPion.NOIR && e.getColor(piece_dispo[i]) !==  e.enumPion.BLANC && e.getColor(piece_dispo[i]) !==  e.enumPion.BLEU){
            erreur = 1;
        }
    }

    assertTrue(erreur == 0);

    for(var i=0; i<piece_dispo.length; i++){
        if (e.getColor(piece_dispo[i]) ===  e.enumPion.NOIR){
            e.choose(2,piece_dispo[i]);
            e.retirePiece(piece_dispo[i]);
        }
    }
    assertTrue(e.getJoueur2()[0] === e.enumPion.NOIR);
    assertTrue(e.getJoueur2()[1] === e.enumPion.NOIR);
    assertTrue(e.getNbPieces() === 33);
};

PalettoTestCase.prototype.testStory5 = function () {
    var e2 = new Engine();
    e2.initPlateau(intermediaire);
    var erreur = 0;
    var piece_dispo = e.getPiecesPrenables();
    for(var i=0; i<piece_dispo.length; i++){
        if (piece_dispo[i] !== "D1" || piece_dispo[i] !== "F1" || piece_dispo[i] !== "E3" || piece_dispo[i] !== "A4" || piece_dispo[i] !== "B5" || piece_dispo[i] !== "C6"){
            erreur = 1;
        }
    }
    assertTrue(erreur == 0);
};

PalettoTestCase.prototype.testStory6 = function () {
    var e3 = new Engine();
    e3.initPlateau();
    e3.choose(1,"A1");
    e3.choose(1,"F6");
    e3.choose(2,"B1");
    e3.choose(2,"E6");
    e3.choose(2,"F5");
    e3.choose(1,"A2");
    e3.choose(1,"A6");
    e3.choose(2,"A3");
    e3.choose(1,"A5");
    e3.choose(1,"F4");
    e3.choose(1,"F1");
    e3.choose(1,"C1");
    e3.choose(2,"E1");
    e3.choose(2,"F3");
    e3.choose(2,"D6");
    e3.choose(2,"A4");
    e3.choose(1,"D3");
    e3.choose(1,"F2");
    e3.choose(1,"B6");
    e3.choose(2,"B3");
    e3.choose(2,"E2");
    e3.choose(2,"E5");
    e3.choose(1,"B4");
    e3.choose(1,"C6");
    e3.choose(1,"D5");
    e3.choose(1,"E3");

    assertTrue(e3.getWinner()=="joueur1");

};