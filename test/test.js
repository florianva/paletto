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

    e.choose(1,"A6");
    assertTrue(e.getJoueur1()[0] === "A6");
    assertTrue(e.getColor("A6") === e.enumPion.JAUNE);

};

PalettoTestCase.prototype.testStory3 = function () {

    e.retirePiece("A6");
    assertTrue(e.getColor("A6") === e.enumPion.VIDE);
    assertTrue(e.getNbPieces() === 35);

};