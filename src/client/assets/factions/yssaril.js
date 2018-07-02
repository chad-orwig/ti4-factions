module.exports = {
    name : 'The Yssaril Tribe',
    img : require('../imgs/image2.png'),
    abilities : [
        {
            name : 'Stall Tactic',
            text : 'Action: Discard 1 action card from your hand.'
        },
        {
            name : 'Scheming',
            text : 'When you draw 1 action card, ' +
                'draw 1 additional action card. ' +
                'Then choose and discard 1 action card from your hand.'
        },
        {
            name : 'Crafty',
            text : 'You can have any number of action cards in your hand. Game effects cannot prevent you from using this ability.'
        }
    ],
    flagship : {
        name : "Y'Sia Y'Ssrila",
        cost : 8,
        combat : '5[x2]',
        move : 2,
        capacity: 3,
        abilities : [
            'This ship may move through systems containing enemy ships',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Transparasteel Plating',
            type : 'G',
            requirements : ['G'],
            text : 'During your turn of the action phase, players that have passed cannot play action cards.'
        },
        {
            name : 'Mageon Implants',
            type : 'G',
            requirements : ['G', 'G', 'G'],
            text : 'ACTION: Exhaust this card to look at another player\'s hand of action cards. Choose 1 of those cards and add it to your hand.'
        }
    ],
    promissoryNote : {
        name : 'Spy Net',
        text : 'At the start of your turn: Look at the Yssairl player\'s hand of action cards. Choose 1 of those cards and add it to your hand. Then return this card to the Yssaril player.'
    },
    commodities : 3,
    start : {
        tech : {
            'Neural Motivator' : 'G'
        },
        units : [
            '2 Carriers',
            '1 Cruiser',
            '2 Fighters',
            '5 Infantry',
            '1 Space Dock',
            '1 PDS'
        ],
        home : [
            {
                name : 'Retillion',
                resource : 2,
                influence : 3
            },
            {
                name : 'Shalloq',
                resource : 1,
                influence : 2
            }
        ]
    }
};