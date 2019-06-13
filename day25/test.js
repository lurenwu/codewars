var wordMesh = require('./index.js');
var Test = require('../test')
var Test = new Test();
const assert = require("chai").assert;
Test.assertEquals(wordMesh(["beacon","condominium","umbilical","california"]), "conumcal");
Test.assertEquals(wordMesh(["allow","lowering","ringmaster","terror"]), "lowringter");
Test.assertEquals(wordMesh(["abandon","donation","onion","ongoing"]), "dononon");
Test.assertEquals(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"]), "ownhippuscartpher"	);
