const React = require('react');
const {array} = require('prop-types');
const Technology = require('./Technology.jsx');

function StartingTech({tech}) {
    const listItems = tech.map(key =>
        <div key={key.name}>
            <Technology type={key.type} name={key.name} requirements={key.requirements} text={key.text} />
        </div>
    );
    return <ul className="starting-tech">{listItems}</ul>;
}

StartingTech.propTypes = {
    tech : array.isRequired
};

module.exports = StartingTech;