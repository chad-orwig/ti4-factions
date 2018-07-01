module.exports = {
    name : 'Arborec',
    img : require('../imgs/image5.png'),
    abilities : [
        {
            name : 'Mitosis',
            text : 'Your Space Docks cannot produce infantry. At the start of the status phase, place 1 infantry from your reinforcements on any planet you control.'
        }
    ],
    flagship : {
        name : 'Duha Menaimon',
        cost : 8,
        combat : '7[x2]',
        move : 1,
        capacity: 5,
        abilities : [
            'After you activate the system wher lies this Flag ship, you may produce up to 5 units in this system',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Letani Warrior II',
            type : 'U',
            requirements : ['G', 'G'],
            text : 'After this unit is destroyed, rolle 1 die. If the result is 6 or greater, place the unit on this card. At the start of your next turn, place each unit that is on this card on a planet you control in your Home System'
        },
        {
            name : 'Bioplasmosis',
            type : 'G',
            requirements : ['G', 'G'],
            text : 'At the end of the status phase, you may remove any number of infantry from planets you control and place them on 1 or more planets you control in the same or adjacent systems'
        }
    ],
    promissoryNote : {
        name : 'Stymie',
        text : 'ACTION: Place this card faceup in your play area. While this card is in your play area, the Arborec player cannot produce units in or adjacent to a non-Home System that contains 1 or more of your units. If you activate a system that contains 1 or more of the Arborec player\'s units, return this card to the Arborec.'
    },
    commodities : 3,
    specialUnits : [{
        name : 'Letani Warrior',
        replaces : 'Infantry',
        cost : .5,
        combat : 8,
        abilities: [
            'Production 1'
        ]
    }]
};