"use strict";

var fs = require('fs');

var chirps = {
  nextid: 0
};

if (fs.existsSync('chirps.json')) {
  chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

var getChirps = function getChirps() {
  return Object.assign({}, chirps); //create a copy and return it
};

var getChirp = function getChirp(id) {
  return Object.assign({}, chirps[id]); //create a copy and return it
};

var createChirp = function createChirp(chirp) {
  chirps[chirps.nextid++] = chirp;
  writeChirps();
};

var updateChirp = function updateChirp(id, chirp) {
  chirps[id] = chirp;
  writeChirps();
};

var deleteChirp = function deleteChirp(id) {
  delete chirps[id];
  writeChirps();
};

var writeChirps = function writeChirps() {
  fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  GetChirp: getChirp,
  UpdateChirp: updateChirp
};