const React = require('react');
const {array} = require('prop-types');
const StartingTech = require('./StartingTech.jsx');
const StartingUnits = require('./StartingUnits.jsx');

function Start({units, tech}) {
    return (
        <div className="start-situation">
            <h2>Starting Setup</h2>
            <div className="start-content">
                {tech.length > 0 &&
                    <StartingTech tech={tech}/>
                }
                <StartingUnits units={units}/>
            </div>
        </div>
    );
}

Start.propTypes = {
    units : array.isRequired,
    tech : array.isRequired
};

module.exports = Start;