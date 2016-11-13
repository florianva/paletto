'use strict';

var Engine = function () {

// private attributes and methods
    var tableau = [];
    var joueur1 = [];
    var joueur2 = [];
    var piecesDispo = [];

// public attributes
    this.enumPion = {NOIR: "noir", VERT: "vert", BLEU: "bleu", BLANC: "blanc", JAUNE: "jaune", ROUGE: "rouge", VIDE: "vide"};

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
        var pion = tableau[i][j];
        if (direction == "d") {
            if (pion != tableau[i + 1][j])
                return true;
            else
                return false;
        } else if (direction == "g") {
            if (pion != tableau[i - 1][j])
                return true;
            else
                return false;
        } else if (direction == "h") {
            if (pion != tableau[i][j - 1])
                return true;
            else
                return false;
        } else if (direction == "b") {
            if (pion != tableau[i][j + 1])
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

    };

    this.getPosition = function(placement) {
        var abs = placement.charCodeAt(0);
        var ord = placement.charAt(1);

        var ligne = ord - 1;
        var colonne = abs - 65;

        return {ligne : ligne, colonne : colonne};
    };

    this.getPlacement = function(i, j) {

        var lettre = String.fromCharCode(j+65);
        var num = i+1;
        var number = num.toString();
        var placement = lettre.concat(number);

        return placement;
    };


    this.choose = function (joueur, position) {
        if(joueur === 1)
            joueur1.push(tableau[this.getPosition(position).ligne][this.getPosition(position).colonne]);
        else
            joueur2.push(tableau[this.getPosition(position).ligne][this.getPosition(position).colonne]);

        this.retirePiece(position);
    };
    
    this.getJoueur1 = function () {
        return joueur1;
    };

    this.getJoueur2 = function () {
        return joueur2;
    };

    this.getColor = function (position) {
        var pos = this.getPosition(position);

        return tableau[pos.ligne][pos.colonne];
    };

    this.getNbPieces = function(){
        var nb = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if (tableau[i][j] != this.enumPion.VIDE) {
                    nb++;
                }
            }
        }
        return nb;
    };

    this.retirePiece = function(position){
        tableau[this.getPosition(position).ligne][this.getPosition(position).colonne] = this.enumPion.VIDE;
    };

    this.getPiecesPrenables = function(){
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
               var nbVoisin = 0;
                if(tableau[j][i] !== this.enumPion.VIDE) {
                    if (j > 0 && j < 5) {
                        if (tableau[j - 1][i] !== this.enumPion.VIDE) {
                            nbVoisin += 1;

                        }
                        if (tableau[j + 1][i] !== this.enumPion.VIDE) {
                            nbVoisin += 1;
                        }
                    } else {
                        if (j == 0) {
                            if (tableau[j + 1][i] !== this.enumPion.VIDE) {
                                nbVoisin += 1;
                            }
                        } else {
                            if (tableau[j - 1][i] !== this.enumPion.VIDE) {
                                nbVoisin += 1;
                            }
                        }

                    }

                    if (i > 0 && i < 5) {
                        if (tableau[j][i - 1] !== this.enumPion.VIDE) {
                            nbVoisin += 1;
                        }
                        if (tableau[j][i + 1] !== this.enumPion.VIDE) {
                            nbVoisin += 1;
                        }
                    } else {
                        if (i == 0) {
                            if (tableau[j][i + 1] !== this.enumPion.VIDE) {
                                nbVoisin += 1;
                            }
                        } else {
                            if (tableau[j][i - 1] !== this.enumPion.VIDE) {
                                nbVoisin += 1;
                            }
                        }

                    }

                    if (nbVoisin <= 2) {
                        piecesDispo.push(this.getPlacement(j,i));
                    }
                }
            }
        }
        return piecesDispo;
    }


};
