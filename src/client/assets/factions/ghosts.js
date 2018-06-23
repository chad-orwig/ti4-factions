module.exports = {
    name : 'Ghosts of Creuss',
    img : require('../imgs/image24.png'),
    abilities : [
        {
            name : 'Quantum Entanglement',
            text : 'You may treat "A" and "B" wormhole systems as if they were adjacent to each other. Game effects cannot prevent you from using this ability.'
        },
        {
            name : 'Slipstream',
            text : 'During your tactical actions, apply +1 to the move value of each of your ships that starts its movement in your Home System or in a system that contains an "A" or "B" wormhole.'
        },
        {
            name : 'Creuss Gate',
            text : 'When you create the game board, place the Creuss Gate (tile 17) where your home system would normally be placed. The Creuss Gate system is not a Home System. Then place your Home System in your play area.'
        }
    ],
    flagship : {
        name : 'Hil Colish',
        cost : 8,
        combat : 5,
        move : 1,
        capacity: 3,
        abilities : [
            'This ship\'s system contains a delta wormhole.',
            'During movement, this ship may move before or after your other ships.',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Dimensional Splicer',
            type : 'R',
            requirements : ['R'],
            text : 'At the start of a space combat in a system that contains a wormhole and 1 or more of your ships, you may produce 1 hit and assign it to 1 of your opponent\'s ships.'
        },
        {
            name : 'Wormhole Generator',
            type : 'B',
            requirements : ['B', 'B'],
            text : 'At the start of the status phase, place or move a Creuss wormhole token into either a system that contains a planet you control or a non-Home System that does not contain another player\'s ships.'
        }
    ],
    promissoryNote : {
        name : 'Creuss Iff',
        text : 'At the start of your turn during the Action Phase: Place or move a Creuss wormhole token in to either a system that contains a planet you control or a non-Home System that does not contain another player\'s ships. Then, return this card to the Creuss player.'
    },
    commodities : 4
};