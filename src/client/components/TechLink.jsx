const React = require('react');
const {object} = require('prop-types');
const TechPopup = require('./TechPopup.jsx');


const TechLink = function({tech}) {

    const [ showPop, setShowPop ] = React.useState(false);
    const togglePop = () => setShowPop(!showPop);

    const popup = showPop ? <TechPopup tech={tech} hideTechDetails={togglePop} /> : '';

    return <a onClick={togglePop} className={`techlink ${tech.type}`}>
        {tech.name}
        {popup}
    </a>;

};

TechLink.propTypes = {
    tech : object.isRequired
};

module.exports = TechLink;