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

PalettoTestCase.prototype.testStory6 = function () {
    e.choose(1,"A1");
    e.choose(1,"F6");
    e.choose(2,"B1");
    e.choose(2,"E6");
    e.choose(2,"F5");
    e.choose(1,"A2");
    e.choose(1,"A6");
    e.choose(2,"A3");
    e.choose(1,"A5");
    e.choose(1,"F4");
    e.choose(1,"F1");
    e.choose(1,"C1");
    e.choose(2,"E1");
    e.choose(2,"F3");
    e.choose(2,"D6");
    e.choose(2,"A4");
    e.choose(1,"D3");
    e.choose(1,"F2");
    e.choose(1,"B6");
    e.choose(2,"B3");
    e.choose(2,"E2");
    e.choose(2,"E5");
    e.choose(1,"B4");
    e.choose(1,"C6");
    e.choose(1,"D5");
    e.choose(1,"E3");

    assertTrue(e.getWinner()=="joueur1");

};