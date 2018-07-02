module.exports = {
    name : 'L1Z1X',
    img : require('../imgs/image25.png'),
    abilities : [
        {
            name : 'Assimilate',
            text : 'When you gain control of a planet, replace each PDS and Space Dock ' +
            'that is on that planet with a matching unit from your reinforcement (if able).'
        },
        {
            name : 'Harrow',
            text : 'After each round of ground combat, your ships in the active system may use ' +
            'their bombardment abilities against your opponent\'s Ground Forces on the planet.'
        }
    ],
    flagship : {
        name : '0.0.1',
        cost : 8,
        combat : '5[x2]',
        move : 1,
        capacity: 5,
        abilities : [
            'During space combat, hits produced by this ship and by your dreadnoughts ' +
            'in this system must be assigned to non-fighter ships if able.',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Super-Dreadnought II',
            type : 'U',
            requirements : ['Y', 'B', 'B'],
            text : [
                'L1Z1X Dreadnought (Cost 4; Combat 4; move 2; Capacity 2)',
                'This unit cannot be destroyed by "direct Hit" action cards',
                'Sustain Damage',
                'Bombardment 4'
            ]
        },
        {
            name : 'Inheritance Systems',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'You may exhaust this card and spend 2 resources when you research a technology; ' +
            'ignore all of that technology\'s prerequisites.'
        }
    ],
    promissoryNote : {
        name : 'Cybernetic Enhancements',
        text : 'At the start of your turn: Remove 1 Command Token from the L1Z1X player\'s strategy pool ' +
        'and return it to his reinforcements; then, place 1 Command Token from your reinforcements ' +
        'in your strategy pool. Then, return this card to the L1X1X player'
    },
    commodities : 2,
    specialUnits : [{
        name : 'Super-Dreadnought',
        replaces : 'Dreadnought',
        cost : 4,
        combat : 5,
        move : 1,
        capacity : 2,
        abilities: [
            'Sustain Damage',
            'Bombardment 5'
        ]
    }],
    start : {
        tech : {
            'Neural Motivator' : 'G',
            'Plasma Scoring' : 'R'
        },
        units : [
            '1 Dreadnought',
            '1 Carrier',
            '3 Fighters',
            '5 Infantry',
            '1 Space Dock',
            '1 PDS'
        ],
        home : [{
            name : '[0.0.0]',
            resource : 5,
            influence : 0
        }]
    }
};