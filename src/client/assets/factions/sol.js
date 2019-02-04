module.exports = {
    name : 'Federation of Sol',
    img : require('../imgs/image28.png'),
    abilities : [
        {
            name : 'Orbital Drop',
            text : 'ACTION: Spend 1 Command Token from your Strategy Pool to place 2 ' +
            'infantry from your reinforcements on 1 planet you control.'
        },
        {
            name : 'Versatile',
            text : 'When you gain Command Tokens during the status phase, gain 1 additional Command Token'
        }
    ],
    flagship : {
        name : 'Genesis',
        cost : 8,
        combat : '5[x2]',
        move : 1,
        capacity: 12,
        abilities : [
            'At the end of the status phase, place 1 infantry from your reinforcements in this system\'s space area.',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Advanced Carrier II',
            type : 'U',
            requirements : ['B', 'B'],
            text : [
                'Sol Carrier (Cost 3; Combat 9; Move 2; Capacity 8)',
                'Sustain Damage'
            ]
        },
        {
            name : 'Spec Ops II',
            type : 'U',
            requirements : ['G', 'G'],
            text : [
                'Sol Infantry (Cost 1/2; Combat 6)',
                'After this unit is destroyed, roll 1 die. If the result is 5 or greater, ' +
                'place the unit on this card. At the start of your next turn, place each unit that is ' +
                'on this card on a planet you control in your Home System'
            ]
        }
    ],
    promissoryNote : {
        name : 'Military Support',
        text : 'At the start of the Sol player\'s turn: Remove 1 token from the Sol player\'s' +
        ' Strategy Pool, if able, and return it to his reinforcements; then, you may place 2 ' +
        'infantry from your reinforcements on any planet you control.'
    },
    commodities : 4,
    specialUnits : [
        {
            name : 'Spec Ops',
            replaces : 'Infantry',
            cost : .5,
            combat : 7
        },
        {
            name : 'Advanced Carrier',
            replaces : 'Carrier',
            cost : 3,
            combat : 9,
            move : 1,
            capacity : 6
        }
    ],
    start : {
        home : [
            {
                name : 'Jord',
                resource : 4,
                influence : 2
            }
        ],
        tech : {
            'Neural Motivator' : 'G',
            'Antimass Deflectors' : 'B'
        },
        units : [
            '2 Carriers',
            '1 Destroyer',
            '3 Fighters',
            '5 Infantry',
            '1 Space Dock'
        ]

    }
};