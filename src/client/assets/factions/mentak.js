module.exports = {
    name : 'Mentak Coalition',
    img : require('../imgs/image10.png'),
    abilities : [
        {
            name : 'Ambush',
            text : 'At the start of a space combat, you may roll 1 die for each of up to 2 of your cruisers ' +
            'or destroyers in the system. For each result equal to or greater than that ' +
            'ship\'s combat value, produce 1 hit; your opponent must assign it to 1 of his ships.'
        },
        {
            name : 'Pillage',
            text : 'After 1 of your neighbors gains Trade Goods or resolves a transaction, ' +
            'if he has 3 or more Trade Goods, you may take 1 of his Trade Goods or commodities.'
        }
    ],
    flagship : {
        name : 'Fourth Moon',
        cost : 8,
        combat : '7[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'Other player\'s ships in this system cannot use Sustain Damage',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Salvage Operation',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'After you win or lose a space combat, gain 1 Trade Good; if you won the combat, ' +
            'you may also produce 1 ship in htat system of any ship type that was destroyed during the combat'
        },
        {
            name : 'Mirror Computing',
            type : 'Y',
            requirements : ['Y', 'Y', 'Y'],
            text : 'When you spend Trade Goods, each Trade Good is worth 2 resources or influence.'
        }
    ],
    promissoryNote : {
        name : 'Promise of Protection',
        text : 'ACTION: Place this card faceup in your play area. While this card is in your play area, ' +
        'the Mentak player cannot use his Pillage faction ability against you. ' +
        'If you activate a system that contains 1 or more of the Mentak player\'s units, ' +
        'return this card to the Mentak player.'
    },
    commodities : 2,
    start : {
        tech : {
            'Sarween Tools' : 'Y',
            'Plasma Scoring': 'R'
        },
        units: [
            '1 Carrier',
            '2 Cruisers',
            '3 Fighters',
            '4 Infantry',
            '1 Space Dock',
            '1 PDS'
        ],
        home : [{
            name : 'Moll Primus',
            resource : 4,
            influence : 1
        }]
    }
};