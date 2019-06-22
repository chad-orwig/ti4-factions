const React = require('react');
const {object, func} = require('prop-types');
const Technology = require('./Technology.jsx');

function TechPopup({tech, hideTechDetails}) {
    return (
        <div className='tech-popup' onClick={hideTechDetails}>
            <Technology type={tech.type} name={tech.name} requirements={tech.requirements} text={tech.text}/>
        </div>
    );
}

TechPopup.propTypes = {
    hideTechDetails: func.isRequired,
    tech : object.isRequired
};

module.exports = TechPopup;