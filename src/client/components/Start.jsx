const React = require('react');
const {object, array} = require('prop-types');
const StartingTech = require('./StartingTech.jsx');
const StartingUnits = require('./StartingUnits.jsx');

function Start({units, tech}) {
    return (
        <div className="start-situation">
            <h2>Starting Setup</h2>
            <div className="start-content">
                <StartingTech tech={tech}/>
                <StartingUnits units={units}/>
            </div>
        </div>
    );
}

Start.propTypes = {
    units : array.isRequired,
    tech : object.isRequired
};

module.exports = Start;