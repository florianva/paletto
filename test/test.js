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