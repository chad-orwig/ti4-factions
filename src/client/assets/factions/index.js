const arborec = require('./arborec');
const ghosts = require('./ghosts');
const hacan = require('./hacan');
const naalu = require('./naalu');
const yin = require('./yin');
const yssaril = require('./yssaril');
const jolNar = require('./jolNar');
const winnu = require('./winnu');
const xxcha = require('./xxcha');
const sol = require('./sol');
const l1z1x = require('./l1z1x');
const sardakk = require('./sardakk');
const nekro = require('./nekro');
const mentak = require('./mentak');
const muaat = require('./muaat');
const saar = require('./saar');
const letnev = require('./letnev');


const _ = require('lodash');

const factionMap = {
    arborec,
    ghosts,
    hacan,
    naalu,
    yin,
    yssaril,
    jolNar,
    winnu,
    xxcha,
    sol,
    l1z1x,
    sardakk,
    nekro,
    mentak,
    saar,
    muaat,
    letnev
};

const factionArray = _.sortBy(Object.values(factionMap), "name");

module.exports = { factionMap, factionArray };