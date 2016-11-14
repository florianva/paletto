'use strict';

var Engine = function () {

// private attributes and methods
    var tableau = [];

// public attributes
    this.enumPion = {NOIR: "noir", VERT: "vert", BLEU: "bleu", BLANC: "blanc", JAUNE: "jaune", ROUGE: "rouge"};

// public methods
    this.initPlateau = function () {
        var tab = [this.enumPion.NOIR, this.enumPion.VERT, this.enumPion.BLANC, this.enumPion.BLEU, this.enumPion.ROUGE, this.enumPion.BLANC,
            this.enumPion.JAUNE, this.enumPion.BLANC, this.enumPion.VERT, this.enumPion.ROUGE, this.enumPion.JAUNE, this.enumPion.BLEU,
            this.enumPion.BLEU, this.enumPion.JAUNE, this.enumPion.BLEU, this.enumPion.BLANC, this.enumPion.NOIR, this.enumPion.ROUGE,
            this.enumPion.ROUGE, this.enumPion.NOIR, this.enumPion.ROUGE, this.enumPion.VERT, this.enumPion.BLEU, this.enumPion.BLANC,
            this.enumPion.BLANC, this.enumPion.VERT, this.enumPion.JAUNE, this.enumPion.NOIR, this.enumPion.JAUNE, this.enumPion.VERT,
            this.enumPion.JAUNE, this.enumPion.BLEU, this.enumPion.NOIR, this.enumPion.ROUGE, this.enumPion.VERT, this.enumPion.NOIR];

        var parcourTab = 0;
        for (var i = 0; i < 6; i++) {
            tableau[i] = [];
            for (var j = 0; j < 6; j++) {
                tableau[i][j] = tab[parcourTab];
                parcourTab++;
            }
        }
    };

    this.getTab = function(){
        return tableau;
    }

    var testCote = function (direction, i, j) {
        var pion = tableau[j][i];
        if (direction == "d") {
            if (pion != tableau[j][i + 1])
                return true;
            else
                return false;
        } else if (direction == "g") {
            if (pion != tableau[j][i - 1])
                return true;
            else
                return false;
        } else if (direction == "h") {
            if (pion != tableau[j - 1][i])
                return true;
            else
                return false;
        } else if (direction == "b") {
            if (pion != tableau[j + 1][i])
                return true;
            else
                return false;
        }
    };

    this.testJuxta = function (i, j) {
        if (i > 0 && i < 5) {
            return testCote("g", i, j) && testCote("d", i, j);
        } else {
            if (i == 0) {
                return testCote("d", i, j);
            } else {
                return testCote("g", i, j);
            }
        }

        if (j > 0 && j < 5) {
            return testCote("h", i, j) && testCote("b", i, j);
        } else {
            if (j == 0) {
                return testCote("b", i, j);
            } else {
                return testCote("h", i, j);
            }
        }

    }
};
