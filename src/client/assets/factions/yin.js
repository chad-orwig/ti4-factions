const Tech = require('../tech');

module.exports = {
    name : 'The Brotherhood of Yin',
    img : require('../imgs/image33.png'),
    abilities : [
        {
            name : 'Indoctrination',
            text : 'At the start of a ground combat, you may ' +
            'spend 2 influence to replace 1 of your opponent\'s ' +
            'participating infantry with 1 infantry from your reinforcements.'
        },
        {
            name : 'Devotion',
            text : 'After each space battle round, you may destroy 1 ' +
            'of your cruisers or destroyers to produce 1 hit and assign it ' +
            'to 1 of your opponent\'s ships.'
        }
    ],
    flagship : {
        name : 'Van Hauge',
        cost : 8,
        combat : '9[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'When this ship is destroyed, destroy all ships in this system',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Impulse Core',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'At the start of a space combat, you may destroy 1 of your ' +
            'cruisers or destroyers in the active system to produce 1 hit against ' +
            'your opponent\'s ships; that hit must be assigned by your opponent to ' +
            '1 of his non-fighter ships, if able.'
        },
        {
            name : 'Yin Spinner',
            type : 'G',
            requirements : ['G', 'G'],
            text : 'After 1 or more of your units use Production, place 1 infantry from your ' +
            'reinforcements on a planet you control in that system.'
        }
    ],
    promissoryNote : {
        name : 'Greyfire Mutagen',
        text : 'After a system is activated: The Yin player cannot use faction abilities or faction ' +
        'technology during this tactical action. Then, return this card to the Yin player.'
    },
    commodities : 2,
    start : {
        home : [
            {
                name : 'Darien',
                resource : 4,
                influence : 4
            }
        ],
        tech : [ Tech['Sarween Tools'] ],
        units : [
            '2 Carriers',
            '1 Destroyer',
            '4 Fighters',
            '4 Infantry',
            '1 Space Dock'
        ]
    }
};