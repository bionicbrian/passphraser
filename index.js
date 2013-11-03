"use strict";

var words = require("./words.json");

module.exports = function passphraser() {
    var nounIndex = Math.floor(Math.random() * words.nouns.length);
    var adjIndex = Math.floor(Math.random() * words.adjectives.length);
    var colorIndex = Math.floor(Math.random() * words.colors.length);
    return words.adjectives[adjIndex] + " " + words.colors[colorIndex] + " " + words.nouns[nounIndex];
};
