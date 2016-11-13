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

PalettoTestCase.prototype.testStory7 = function () {

    var ee = new Engine();
    ee.initPlateau();
    ee.choose(1, "A1");
    ee.choose(1, "F6");
    ee.choose(2, "A2");
    ee.choose(2, "A6");
    ee.choose(1, "A5");
    ee.choose(1, "F6");
    ee.choose(2, "E6");
    ee.choose(2, "B1");
    ee.choose(2, "F5");
    ee.choose(1, "A3");
    ee.choose(1, "F2");
    ee.choose(2, "C1");
    ee.choose(2, "F4");
    ee.choose(1, "E1");
    ee.choose(1, "D6");
    ee.choose(1, "A4");
    ee.choose(1, "F3");
    ee.choose(2, "D1");
    ee.choose(2, "B6");
    ee.choose(1, "E2");
    ee.choose(1, "E5");
    ee.choose(2, "C6");
    ee.choose(2, "D5");
    ee.choose(2, "E3");
    ee.choose(1, "B5");
    ee.choose(2, "D2");
    ee.choose(1, "B2");
    ee.choose(1, "D3");
    ee.choose(2, "E4");
    ee.choose(1, "C5");
    ee.choose(1, "B3");
    ee.choose(2, "D4");
    ee.choose(2, "C2");
    ee.choose(1, "C3");
    ee.choose(2, "B4");
    ee.choose(1, "C4");

    assertTrue(ee.getWinner() == "joueur1");

};