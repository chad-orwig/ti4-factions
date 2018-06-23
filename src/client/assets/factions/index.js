const arborec = require('./arborec');
const ghosts = require('./ghosts');
const hacan = require('./hacan');
const naalu = require('./naalu');
const yin = require('./yin');
const yssaril = require('./yssaril');

const _ = require('lodash');

const factionMap = {
    arborec,
    ghosts,
    hacan,
    naalu,
    yin,
    yssaril
};

const factionArray = _.sortBy(Object.values(factionMap), "name");

module.exports = { factionMap, factionArray };