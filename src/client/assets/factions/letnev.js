const Tech = require('../tech/tech');

module.exports = {
    name : 'Barony of Letnev',
    img : require('../imgs/image13.png'),
    abilities : [
        {
            name : 'Munitions Reserves',
            text : 'At the start of each round of space combat, you may spend 2 Trade Goods; ' +
            'you may reroll any number of your dice during that combat round.'
        },
        {
            name : 'Armada',
            text : 'The maximum number of non-fighter ships you can have in each ' +
            'system is equal to 2 more than the number of Command Tokens in your Fleet Pool.'
        }
    ],
    flagship : {
        name : 'Arc Secundus',
        cost : 8,
        combat : '5[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'Other players\' units in this system lose Planetary Shield',
            'At the start of each space combat round, repair this ship.',
            'Sustain Damage',
            'Bombardment 5[x3]'
        ]
    },
    techs : [
        {
            name : 'L4 Disruptors',
            type : 'Y',
            requirements : ['Y'],
            text : 'During an invasion combat, units cannot use Space Canon against your units.'
        },
        {
            name : 'Non-Euclidean Shielding',
            type : 'R',
            requirements : ['R', 'R'],
            text : 'When 1 of your units uses Sustain Damage, cancel 2 hits.'
        }
    ],
    promissoryNote : {
        name : 'War Funding',
        text : 'At the start of a round of space combat: the Letnev player loses 2 Trade Goods. ' +
        'During this combat round, reroll any number of your dice. Then, return this card to the Letnev player.'
    },
    commodities : 2,
    start : {
        tech : [
            Tech['Antimass Deflectors'],
            Tech['Plasma Scoring']
        ],
        units : [
            '1 Dreadnought',
            '1 Carrier',
            '1 Destroyer',
            '1 Fighter',
            '3 Infantry',
            '1 Space Dock'
        ],
        home : [
            {
                name : 'Arc Prime',
                resource : 4,
                influence : 0
            },
            {
                name : 'Wren Terra',
                resource : 2,
                influence : 1
            }
        ]
    }
};