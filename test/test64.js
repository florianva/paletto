'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var e = new Engine();

PalettoTestCase.prototype.testStory8 = function () {

    e.initPlateau(64);
    for(var i=0; i<8; i++){
        for(var j=0; j<8; j++){
            assertTrue(e.testJuxta(i,j));
        }
    }

};
