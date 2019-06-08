const Tech = require('../tech/tech');

module.exports = {
    name : 'Emirates of Hacan',
    img : require('../imgs/image6.png'),
    abilities : [
        {
            name : 'Master of Trade',
            text : 'You do not have to spend a command token to resolve the secondary ability of the Trade Strategy Card'
        },
        {
            name : 'Guild Ships',
            text : 'You can negotiate transactions with players who are not your neighbor.'
        },
        {
            name : 'Arbiters',
            text : 'When you are negotiating a transaction, you can also exchange action cards.'
        }
    ],
    flagship : {
        name : 'Wrath of Kenara',
        cost : 8,
        combat : '7[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'After you roll a die during a space combat in the system, you may spend 1 Trade Good to apply +1 to the result',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Quantum Datahub Node',
            type : 'Y',
            requirements : ['Y', 'Y', 'Y'],
            text : 'At the end of the Strategy Phase, you may spend 1 Command Token from your Strategy Pool ' +
            'and give another player 3 of your Trade Goods. If you do, give 1 of your Strategy Cards ' +
            'to that player and take 1 of his Strategy Cards.'
        },
        {
            name : 'Production Centers',
            type : 'G',
            requirements : ['G', 'G'],
            text : 'Action: Exhaust this card and spend 1 Command Token from your ' +
            'Strategy Pool to gain 4 Trade Goods and choose 1 other player; that player gains 2 Trade Goods'
        }
    ],
    promissoryNote : {
        name : 'Trade Convoys',
        text : 'Action: Place this card faceup in your play area. While this card is in your play area, ' +
        'you may negotiate transactions with players who are not your neighbor. If you activate a ' +
        'system that contains 1 or more of the Hacan player\'s units, return this card to the Hacan player'
    },
    commodities : 6,
    start : {
        tech : [
            Tech['Antimass Deflectors'],
            Tech['Sarween Tools']
        ],
        units : [
            '2 Carriers',
            '1 Cruiser',
            '2 Fighters',
            '4 Infantry',
            '1 Space Dock'
        ],
        home : [
            {
                name: 'Hercant',
                resource : 1,
                influence : 1
            },
            {
                name : 'Arretze',
                resource : 2,
                influence : 0
            },
            {
                name : 'Kamdorn',
                resource : 0,
                influence : 1
            }
        ]
    }
};