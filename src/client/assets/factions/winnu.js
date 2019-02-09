module.exports = {
    name : 'Winnu',
    img : require('../imgs/winnu.png'),
    abilities : [
        {
            name : 'Blood Ties',
            text : 'You do not have to spend influence to remove the custodians token from Mecatol Rex.'
        },
        {
            name : 'Reclamation',
            text : 'After you resolve a tactical action during which you gained control of Mecatol Rex, ' +
            'you may place 1 PDS and 1 Space Dock from your reinforcements on Mecatol Rex.'
        }
    ],
    flagship : {
        name : 'Salai Sai Corian',
        cost : 8,
        combat : '7',
        move : 1,
        capacity: 3,
        abilities : [
            'When this unit makes a combat roll, it rolls a number of dice equal to your opponents non-fighter ships in the system.',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Lazax Gate Folding',
            type : 'B',
            requirements : ['B', 'B'],
            text : [
                'During your tactical actions, if you do not control Mecatol Rex, ' +
                'treat its system as if it contains both an alpha and beta wormhole.',

                'ACTION: If you control Mecatol Rex, exhaust this card to place 1 infantry from your reinforcement on Mecatol Rex.'
            ]
        },
        {
            name : 'Hegemonic Trade Policy',
            type : 'Y',
            requirements : ['Y', 'Y'],
            text : 'Exhaust this card when 1 or more of your units use Production; ' +
            'swap the resource and influence values of 1 planet you control until the end of your turn.'
        }
    ],
    promissoryNote : {
        name : 'Acquiescence',
        text : 'At the end of the Strategy Phase: Exchange 2 of your Strategy Cards with a Strategy Card that was chosen by the Winnu player. Then return this card to the Winnu player.'
    },
    commodities : 3,
    start : {
        tech : {
            'Choose any 1 technology that has no prerequisites.' : 'W'
        },
        units : [
            '1 Carrier',
            '1 Cruiser',
            '2 Fighters',
            '2 Infantry',
            '1 Space Dock',
            '1 PDS'
        ],
        home : [{
            name : 'Winnu',
            resource : 3,
            influence : 4
        }]
    }
};