module.exports = {
    name : 'Embers of Muaat',
    img : require('../imgs/image32.png'),
    abilities : [
        {
            name : 'Star Forge',
            text : 'ACTION: Spend 1 Command Token from your strategy pool to place either 2 ' +
            'fighters or 1 destroyer from your reinforcements in a system that contains 1 or more of your war suns.'
        },
        {
            name : 'Gashlai Physiology',
            text : 'Your ships can move through supernovas'
        }
    ],
    flagship : {
        name : 'The Inferno',
        cost : 8,
        combat : '5[x2]',
        move : 1,
        capacity: 3,
        abilities : [
            'ACTION: Spend 1 Command Token from your Strategy Pool to place 1 free Cruiser in this unit\'s system',
            'Sustain Damage'
        ]
    },
    techs : [
        {
            name : 'Prototype War Sun II',
            type : 'U',
            requirements : ['Y', 'R', 'R', 'R'],
            text : [
                'Muuat War Sun (Cost 10; Combat 3[x3]; Move 3; Capacity 6)',
                'Other Player\'s units in this system lose Planetary Shield',
                'Sustain Damage',
                'Bombardment 3[x3]'
            ]
        },
        {
            name : 'Magmus Reactor',
            type : 'R',
            requirements : ['R', 'R'],
            text : [
                'Your ships can move into supernovas',
                'After 1 or more of your units use Production in a system that ' +
                'either contains a war sun or is adjacent to a supernova, gain 1 Trade Good'
            ]
        }
    ],
    promissoryNote : {
        name : 'Fires of the Gashlai',
        text : 'ACTION: Remove 1 Command Token from the Muaat player\'s fleet pool and return it to his reinforcements; then, gain your war sun unit upgrade technology card. Then return this card to the Muaat player.'
    },
    commodities : 4
};