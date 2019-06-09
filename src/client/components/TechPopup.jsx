const React = require('react');
const {object, number} = require('prop-types');
const Technology = require('./Technology.jsx');

function TechPopup({tech, x, y}) {
    return (
        <div className='tech-popup'>
            <Technology type={tech.type} name={tech.name} requirements={tech.requirements} text={tech.text}/>
        </div>
    );
}

TechPopup.propTypes = {
    tech : object.isRequired,
    x : number.isRequired,
    y : number.isRequired
};

module.exports = TechPopup;