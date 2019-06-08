const Tech = require('../tech/tech');

module.exports = {
    name : 'Naalu Collective',
    img : require('../imgs/naalu.png'),
    abilities : [
        {
            name : 'Telepathic',
            text : 'At the end of the strategy phase, place the Naalu "0" token on your Strategy Card: you are first in the initiative order.'
        },
        {
            name : 'Foresight',
            text : 'After another player moves ships into a system that contains 1 or more of your ships, you may place a Command Token from your Strategic Pool in an adjacent system that does not contain another player\'s ship; move your ships from the active system into that system.'
        }
    ],
    flagship : {
        name : 'Matriarch',
        cost : 8,
        combat : '9[x2]',
        move : 1,
        capacity: 6,
        abilities : [
            'During an invasion in this system you may commit fighters to planets as if they were Ground Forces. After combat, return those units to the space area',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Neuroglaive',
            type : 'G',
            requirements : ['G', 'G', 'G'],
            text : 'After another player activates a system that contains 1 or more of your ships, that player removes 1 Command Token from his fleet Pool and returns it to his reinforcements.'
        },
        {
            name : 'Hybrid Crystal Figher II',
            type : 'U',
            requirements : ['G', 'B'],
            text : [
                'Naalu Fighter (Combat: 7; Move 2)',
                'This unit may move without being transported.',
                'Each fighter in excess of your ships\' capacity counts as 1/2 of a ship against your fleet pool.'
            ]
        }
    ],
    promissoryNote : {
        name : 'Gift of Prescience',
        text : 'At the end of the Strategy Phase: Place this card face up in your play area and place the Naalu "0" token on your Strategy Card; you are first in initiative order; the Naalu player cannot use his Telepathic faction ability during this game round. Return this card to the Naalu player at the end of the Status Phase.'
    },
    commodities : 3,
    specialUnits : [{
        name : 'Hybrid Crystal Fighter',
        replaces : 'Fighter',
        cost : .5,
        combat : 8
    }],
    start : {
        tech : [
            Tech['Neural Motivator'],
            Tech['Sarween Tools']
        ],
        units : [
            '1 Carrier',
            '1 Cruiser',
            '1 Destroyer',
            '3 Fighters',
            '4 Infantry',
            '1 Space Dock',
            '1 PDS'
        ],
        home : [
            {
                name : 'Druaa',
                resource : 3,
                influence : 1
            },
            {
                name : 'Maaluuk',
                resource : 0,
                influence : 2
            }
        ]
    }
};