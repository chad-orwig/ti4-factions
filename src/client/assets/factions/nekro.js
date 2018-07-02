module.exports = {
    name : 'Nekro Virus',
    img : require('../imgs/image17.png'),
    abilities : [
        {
            name : 'Galactic Threat',
            text : 'You cannot vote on agendas. Once per Agenda Phase, after an agenda is ' +
            'revealed, you may predict aloud the outcome of that agenda. ' +
            'If your prediction is correct, gain 1 technology that is owned by a player who voted how you predicted.'
        },
        {
            name : 'Technological Singularity',
            text : 'Once per combat, after 1 of your opponent\'s units is destroyed, ' +
            'you may gain 1 technology that is owned by that player. You ignore prerequisites.'
        },
        {
            name : 'Propagation',
            text : 'You cannot research technology. When you would research a technology, gain 3 Command Tokens'
        }
    ],
    flagship : {
        name : 'The Alastor',
        cost : 8,
        combat : '9[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'At the start of a space combat, choose any number of your Ground Forces in this ' +
            'system to participate in that combat as if they were ships',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Valefar Assimilator',
            type : '',
            requirements : [],
            text : 'When you would gain another player\'s technology using 1 of your faction abilities, ' +
            'you may place either the "X" or "Y" assimilator token on a faction technology owned by ' +
            'that player instead. While that token is on a technology, the corresponding "X" or "Y" ' +
            'card gains that technology\'s text. You cannot place an assimilator token on a ' +
            'technology that already has one.'
        }
    ],
    promissoryNote : {
        name : 'Antivirus',
        text : 'At the start of a combat: Place this card faceup in your play area; ' +
        'while this card is in your play area, the Nekro player cannot use his ' +
        'Technological Singularity faction ability against you. ' +
        'IF you activate a system that contains 1 or more of the Nekro player\'s units, ' +
        'return this card to the Nekro player.'
    },
    commodities : 3,
    start : {
        tech : {
            'Daxcive Animators' : 'G',
            'Velefar Assimilator X/Y' : 'W'
        },
        units : [
            '1 Dreadnought',
            '1 Carrier',
            '1 Cruiser',
            '2 Fighters',
            '2 Infantry',
            '1 Space Dock'
        ],
        home : [{
            name : 'Mordai II',
            resource : 4,
            influence : 0
        }]
    }
};