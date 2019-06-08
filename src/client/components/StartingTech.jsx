const React = require('react');
const {object} = require('prop-types');

function StartingTech({tech}) {
    const listItems = tech.map(key => <li key={key.name} className={key.type} title={key.text}>{key.name}</li>);
    return <ul className="starting-tech">{listItems}</ul>;
}

StartingTech.propTypes = {
    tech : object.isRequired
};

module.exports = StartingTech;