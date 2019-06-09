const React = require('react');
const {withRouter, Link} = require('react-router-dom');
const _ = require('lodash');
const qs = require('query-string');

const ButtonBar = withRouter(({location, races, hideTechDetails}) => {
    const onClick = function() {
        hideTechDetails();
    };
    const selectedRaces = _.filter(races, "selected")
        .map(r=>r.factionKey);
    const queryString = qs.stringify({
        factions : selectedRaces
    }, {arrayFormat: 'bracket'});
    const onSelectionPage = location.pathname !== "/factions";
    const selectionButton = onSelectionPage ?
        <span className="nav-button disabled btn btn-primary btn-lg">Selection</span> :
        <Link to="/" className="nav-button btn btn-primary btn-lg" onClick={onClick}>Selection</Link>;

    const detailsButton = onSelectionPage ?
        <Link to={`/factions?${queryString}`} className="right-button nav-button btn btn-primary btn-lg">Details</Link> :
        <span className="right-button nav-button disabled btn btn-primary btn-lg">Details</span>;
   return (
       <div className="button-bar">
           {selectionButton}
           {detailsButton}
       </div>
   );
});

module.exports = ButtonBar;