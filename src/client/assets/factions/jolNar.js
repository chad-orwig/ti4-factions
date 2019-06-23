const Tech = require('../tech');

module.exports = {
    name : 'Universities of Jol-Nar',
    img : require('../imgs/jol-nar.png'),
    abilities : [
        {
            name : 'Fragile',
            text : 'Apply -1 to the result of each of your units\' combat roll.'
        },
        {
            name : 'Brilliant',
            text : 'When you spend a Command Token to resolve the secondary ' +
            'ability of the Technology Strategy Card, you may resolve the primary ability INSTEAD.'
        },
        {
            name : 'Analytical',
            text : 'When you research a technology that is not a unit upgrade technology, ' +
            'you may ignore 1 prerequisite.'
        }
    ],
    flagship : {
        name : 'J.N.S Hylarim',
        cost : 8,
        combat : '6[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'When making a combat roll for this ship, each result of 9 or 10, before applying modifiers, produces 2 additional hits.',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Spatial Conduit Network',
            type : 'B',
            requirements : ['B', 'B'],
            text : 'You may exhaust this card after you activate a system that contains 1 or more of your units; ' +
            'that system is adjacent to all other systems that contain 1 or more of your ' +
            'units during this activation.'
        },
        {
            name : 'E-res Siphons',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'After another player activates a system that contains 1 or more of your ships, gain 4 Trade Goods.'
        }
    ],
    promissoryNote : {
        name : 'Research Agreement',
        text : 'After the Jol-Nar player researches a technology that is not a faction technology: ' +
        'Gain that technology. Then, return this card to the Jol-Nar player.'
    },
    commodities : 4,
    start : {
        tech : [
            Tech['Neural Motivator'],
            Tech['Antimass Deflectors'],
            Tech['Sarween Tools'],
            Tech['Plasma Scoring']
        ],
        units : [
            '1 Dreadnought',
            '2 Carriers',
            '1 Fighter',
            '2 Infantry',
            '1 Space Dock',
            '2 PDS'
        ],
        home : [
            {
                name : 'Jol',
                resource : 1,
                influence : 2
            },
            {
                name : 'Nar',
                resource : 2,
                influence : 3
            }
        ]

    }
};