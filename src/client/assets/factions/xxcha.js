const Tech = require('../tech');

module.exports = {
    name : 'Xxcha Kingdom',
    img : require('../imgs/xxcha.png'),
    abilities : [
        {
            name : 'Peace Accords',
            text : 'After you resolve the primary or secondary ability of the Diplomacy Strategy Card, ' +
            'you may gain control of 1 planet other than Mecatol Rex that does not contain ' +
            'any units and is in a system that is adjacent to a planet you control.'
        },
        {
            name : 'Quash',
            text : 'When an agenda is revealed, you may spend 1 Command Token from your Strategy Pool ' +
            'to discard that agenda and reveal 1 agenda from the top of the deck. Players vote on this agenda instead.'
        }
    ],
    flagship : {
        name : 'Loncara Ssodu',
        cost : 8,
        combat : '7[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'You may use this unit\'s Space Cannon against ships that are in adjacent systems;',
            'Space Cannon 5[x3]',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Instinct Training',
            type : 'G',
            requirements : ['G'],
            text : 'You may exhaust this card and spend 1 Command Token from your Strategy Pool ' +
            'when another player plays an action card; cancel that action card.'
        },
        {
            name : 'Nullification Field',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'After another player activates a system that contains 1 or more of your ships, ' +
            'you may exhaust this card and spend 1 Command Token from your Strategy Pool; ' +
            'immediately end that player\'s turn.'
        }
    ],
    promissoryNote : {
        name : 'Political Favor',
        text : 'Remove 1 Command Token from the Xxcha player\'s strategy pool and return it ' +
        'to his reinforcements; then, discard the revealed agenda and reveal 1 agenda ' +
        'from the top of the deck; players vote on this agenda instead. Then, return this card to the Xxcha player.'
    },
    commodities : 4,
    start : {
        home : [
            {
                name : 'Archon Wren',
                resource : 2,
                influence : 3
            },
            {
                name : 'Archon Tau',
                resource : 1,
                influence : 1
            }
        ],
        tech : [ Tech['Graviton Laser System'] ],
        units : [
            '1 Carrier',
            '2 Cruisers',
            '3 Fighters',
            '4 Infantry',
            '1 Space Dock',
            '1 PDS'
        ]
    }
};