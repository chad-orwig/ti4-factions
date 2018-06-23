module.exports = {
    name : 'Sardakk N\'orr',
    img : require('../imgs/image23.png'),
    abilities : [
        {
            name : 'Unrelenting',
            text : 'Apply +1 to the result of each of your unit\'s combat rolls.'
        }
    ],
    flagship : {
        name : 'C\'Morran Norr',
        cost : 8,
        combat : '6[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'Apply +1 to the result of each of your other ship\'s combat rolls in this system',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Exotrireme II',
            type : 'U',
            requirements : ['Y', 'B', 'B'],
            text : [
                'N\'orr Dreadnought (Cost 4; Combat 5; Move 2; Capacity 1',
                'This unit cannot be destroyed by "Direct Hit" action cards',
                'After a round of space combat, you may destroy this unit to destroy up to 2 ships in this system',
                'Sustain Damage',
                'Bombardment 4[x2]'
            ]
        },
        {
            name : 'Valkyrie Particle Weave',
            type : 'R',
            requirements : ['R', 'R'],
            text : 'After making combat rolls during a round of ground combat, ' +
            'if your opponent produced 1 or more hits, you produce 1 additional hit.'
        }
    ],
    promissoryNote : {
        name : 'Tekklar Legion',
        text : 'At the start of an invasion combat: Apply +1 to the result of each of ' +
        'your unit\'s combat rolls during this combat; if your opponent is the N\'orr player, ' +
        'apply -1 to the result of each of his unit\'s combat rolls during this combat. ' +
        'Then return this card to the N\'orr player.'
    },
    commodities : 3
};