const React = require('react');
const { TransitionGroup, CSSTransition } = require('react-transition-group');
const {factionMap} = require('../assets/factions');
const FactionList = require('./FactionList.jsx');
const FactionSelectionGrid = require('./FactionSelectionGrid.jsx');
const ButtonBar = require('./ButtonBar.jsx');
const _ = require('lodash');
const ScrollToTop = require('./ScrollToTop.jsx');
const DonateButton = require('./DonateButton.jsx');
const { BrowserRouter:Router, Route, Switch} = require('react-router-dom');
const qs = require('query-string');

class TI4Cheat extends React.Component {

    static initialState() {
        const races = Object.keys(factionMap).map(
            factionKey => { return {factionKey}; }
        );
        const sortedRaces = _.sortBy(races, "factionKey");
        return {
            races : sortedRaces
        };
    }

    static renderFactionSelector() {
        return <FactionSelectionGrid
            races={this.state.races}
            unselectFunction={this.unselectFaction}
            selectFunction={this.selectFaction}
        />;
    }

static renderFactionListBuilder(location) {
        return () => {
            const selectedFactions = (qs.parse(location.search, {arrayFormat: 'bracket'}).factions || [])
                .map((factionKey) => factionMap[factionKey]);
            return (
                <FactionList factions={selectedFactions} showTechDetails={this.showTechDetails} hideTechDetails={this.hideTechDetails} shownTech={this.state.shownTech}/>
            );
        };
        }
    static unselectFaction (factionKey) {
        const raceIndex = this.findRaceIndex(factionKey);
        if(raceIndex >= 0) {
            const races = [...this.state.races];
            races[raceIndex] = Object.assign({}, races[raceIndex], {selected : false});
            this.setState({races});
        }
    }
    static findRaceIndex (factionKey) {
        return _.findIndex(this.state.races, {factionKey});
    }
    static selectFaction (factionKey) {
        const raceIndex = this.findRaceIndex(factionKey);
        if(raceIndex >= 0) {
            const races = [...this.state.races];
            races[raceIndex] = Object.assign({}, races[raceIndex], {selected : true });
            this.setState({races});
        }
    }
    static showTechDetails (tech, e) {
        this.setState({
            shownTech : {tech, target : e.currentTarget}
        });
    }
    static hideTechDetails() {
        if (this.state.shownTech) {
            this.setState({
                shownTech : undefined
            });
        }
    }
    constructor() {
        super();

        this.state = TI4Cheat.initialState();
        this.selectFaction = TI4Cheat.selectFaction.bind(this);
        this.findRaceIndex = TI4Cheat.findRaceIndex.bind(this);
        this.unselectFaction = TI4Cheat.unselectFaction.bind(this);

        this.renderFactionSelector = TI4Cheat.renderFactionSelector.bind(this);
        this.showTechDetails = TI4Cheat.showTechDetails.bind(this);
        this.hideTechDetails = TI4Cheat.hideTechDetails.bind(this);
        this.renderFactionListBuilder = TI4Cheat.renderFactionListBuilder;

    }

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Route render={({location}) => {
                        return <div>
                            <DonateButton/>
                            <ButtonBar races={this.state.races} hideTechDetails={this.hideTechDetails}/>
                            <TransitionGroup>
                                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                    <Switch location={location}>
                                        <Route exact path="/factions" render={this.renderFactionListBuilder(location)}/>
                                        <Route exact render={this.renderFactionSelector}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>;
                    }}>
                    </Route>
                </ScrollToTop>
            </Router>
        );
    }
}

module.exports = TI4Cheat;