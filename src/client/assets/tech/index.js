module.exports = {
    'Light/Wave Deflector' : {
        name : 'Light/Wave Deflector',
        type : 'B',
        text : 'Your ships can move through systems that contain other player’s ships',
        requirements : ['B','B','B'],
    },
    'Fleet Logistics' : {
        name : 'Fleet Logistics',
        type : 'B',
        text : 'During each of your turns of the action phase, you may perform 2 actions instead of 1',
        requirements : ['B','B']
    },
    'Gravity Drive' : {
        name : 'Gravity Drive',
        type : 'B',
        text : 'After you activate a system, apply +1 to the move value of 1 of your ships during this tactical action',
        requirements : ['B']
    },
    'Antimass Deflectors' : {
        name : 'Antimass Deflectors',
        type : 'B',
        text : 'Your ships can move into and through asteroid fields. When other players’ ' +
            'units use SPACE CANNON against your units, apply -1 to the result of each die roll.',
        requirements : []
    },
    'Integrated Economy' : {
        name : 'Integrated Economy',
        type : 'Y',
        text : 'After you gain control of a planet, you may produce any number of units on that ' +
            'planet that have a combined cost equal to or less than that planet’s resource value.',
        requirements : ['Y','Y','Y']
    },
    'Transit Diodes' : {
        name : 'Transit Diodes',
        type : 'Y',
        text : 'You may exhaust this card at the start of your turn during the action phase; remove ' +
            'up to 4 of your ground forces from the game board and place them on 1 or more planets you control.',
        requirements : ['Y',"Y"]
    },
    'Graviton Laser System' : {
        name : 'Graviton Laser System',
        type : 'Y',
        text : 'You may exhaust this card before 1 or more of your units uses SPACE CANNON; hits produced ' +
            'by those units must be assigned to non-fighter ships if able.',
        requirements : ['Y']
    },
    'Sarween Tools' : {
        name : 'Sarween Tools',
        type : 'Y',
        text : 'When 1 or more of your units use PRODUCTION, reduce the combined cost of the produced units by 1.',
        requirements : []
    },
    'Assault Cannon' : {
        name : 'Assault Cannon',
        type : 'R',
        text : 'At the start of a space combat in a system that contains 3 or more of your non-fighter ships, ' +
            'your opponent must destroy 1 of his non-fighter ships.',
        requirements : ['R','R','R']
    },
    'Duranium Armor' : {
        name : 'Duranium Armor',
        type : 'R',
        text : 'During each combat round, after you assign hits to your units, repair 1 of your damaged units ' +
            'that did not use SUSTAIN DAMAGE during this combat round.',
        requirements : ['R','R']
    },
    'Magen Defense Grid' : {
        name : 'Magen Defense Grid',
        type : 'R',
        text : 'You may exhaust this card at the start of a round of ground units that have PLANETARY SHIELD; your ' +
            'opponent cannot make combat rolls this combat round.',
        requirements : ['R']
    },
    'Plasma Scoring' : {
        name : 'Plasma Scoring',
        type : 'R',
        text : 'When 1 or more of your units use BOMBARDMENT or SPACE CANNON, 1 of those rolls may roll 1 additional die',
        requirements : []
    },
    'X-89 Bacterial weapon' : {
        name : 'X-89 Bacterial weapon',
        type : 'G',
        text : 'ACTION: Exhaust this card and choose 1 planet in a system that contains 1 or more of your ships that have ' +
            'BOMBARDMENT; destroy all infantry on that planet.',
        requirements : ['G','G','G']
    },
    'Hyper Metabolism' : {
        name : 'Hyper Metabolism',
        type : 'G',
        text : 'During the status phase, gain  2   3  command tokens instead of  1   2.',
        requirements : ['G','G']
    },
    'Dacxive Animators' : {
        name : 'Dacxive Animators',
        type : 'G',
        text : 'After you win a ground combat, you may place 1 infantry from your reinforcements on that planet.',
        requirements : ['G']
    },
    'Neural Motivator' : {
        name : 'Neural Motivator',
        type : 'G',
        text : 'During the status phase, draw 2 action cards instead of 1.',
        requirements : []
    },
    'Valefar Assimilator Y and X' : {
        name : 'Valefar Assimilator Y and X',
        type : 'nekro',
        text : 'When you would gain another player’s technology using one of your faction abilities, you may place ' +
            'the (Y or X) assimilator token on a faction technology owned by that player instead. While that token is ' +
            'on a technology, this card gains that technology’s text. You cannot place an assimilator token on technology ' +
            'that already has an assimilator token.',
        requirements : []
    },
    'Choose any 1 technology that has no prerequisites.' : {
        name : 'Choose any 1 technology that has no prerequisites.',
        type : 'winnu',
        text : 'Choose any 1 technology that has no prerequisites.',
        requirements : []
    }
};