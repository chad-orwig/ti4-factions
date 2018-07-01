module.exports = {
    name : 'Clan of Saar',
    img : require('../imgs/image11.png'),
    abilities : [
        {
            name : 'Scavenge',
            text : 'Gain 1 Trade Good every time you gain control of a planet.'
        },
        {
            name : 'Nomadic',
            text : 'You can score a public objective even if you do not control all the planets in your Home System.'
        },
        {
            name : 'Floating Factory I',
            text : [
                'This unit is placed in a space area instead of on a planet. ' +
                'This unit can move and retreat as if it were a ship. ' +
                'If this unit is blockaded, it is destroyed.',
                'Production 5'
            ]
        }
    ],
    flagship : {
        name : 'Son of Ragh',
        cost : 8,
        combat : '5[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'Anti-Fighter Barrage 6[x4]',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Floating Factory II',
            type : 'U',
            requirements : ['B','Y'],
            text : [
                'Saar Space Dock (Move 2, Capacity 5)',
                'This unit is placed in a space area instead of on a planet. ' +
                'This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.',
                'Production 7'
            ]
        },
        {
            name : 'Chaos Mapping',
            type : 'B',
            requirements : ['B'],
            text : [
                'Other players cannot activate asteroid fields that contain 1 or more of your ships.',
                'At the start of your turn during the action phase, you may produce ' +
                '1 unit in a system that contains at least 1 of your units that has Production.'
            ]
        }
    ],
    promissoryNote : {
        name : 'Ragh\'s Call',
        text : 'After you commit 1 or more units to land on a planet: Remove all of the Saar player\'s ' +
        'Ground Forces from that planet and place them on a planet controlled by the Saar player. ' +
        'Then, return this card to the Saar player.'
    },
    commodities : 3,
    specialUnits : [{
        name : 'Floating Factory',
        replaces : 'Space Dock',
        move : 1,
        capacity : 4,
        abilities: [
            'This unit is placed in a space area instead of on a planet. This unit can move and retreat as if it were a ship. If this unit is blockaded, it is destroyed.',
            'Production 5'
        ]
    }]
};