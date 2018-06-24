const React = require('react');
const { TransitionGroup, CSSTransition } = require('react-transition-group');
const {factionMap} = require('../assets/factions');
const FactionList = require('./FactionList.jsx');
const FactionSelectionGrid = require('./FactionSelectionGrid.jsx');
const ButtonBar = require('./ButtonBar.jsx');
const _ = require('lodash');
const { BrowserRouter:Router, Route, Switch} = require('react-router-dom');

function findRaceIndexBuilder() {
    return (factionKey) => _.findIndex(this.state.races, {factionKey});
}

function selectFactionBuilder() {
    return (factionKey) => {
        const raceIndex = this.findRaceIndex(factionKey);
        if(raceIndex >= 0) {
            const races = [...this.state.races];
            races[raceIndex] = Object.assign({}, races[raceIndex], {selected : true });
            this.setState({races});
        }
    };
}


function unselectFactionBuilder() {
    return (factionKey) => {
        const raceIndex = this.findRaceIndex(factionKey);
        if(raceIndex >= 0) {
            const races = [...this.state.races];
            races[raceIndex] = Object.assign({}, races[raceIndex], {selected : false});
            this.setState({races});
        }
    };
}

function renderFactionListBuilder() {
    return () => {
        const selectedFactions = _.filter(this.state.races, "selected")
            .map(({factionKey}) => factionMap[factionKey]);
        return (
            <div>
                <FactionList factions={selectedFactions}/>
            </div>
        );
    }
}

function renderFactionSelectorBuilder() {
    return () => (
        <div>
            <FactionSelectionGrid
                races={this.state.races}
                unselectFunction={this.unselectFaction}
                selectFunction={this.selectFaction}
            />
        </div>
    );
}

function initialState() {
    const races = Object.keys(factionMap).map(
        factionKey => { return {factionKey}; }
    );
    const sortedRaces = _.sortBy(races, "factionKey");
    return {
        races : sortedRaces
    };
}

class TI4Cheat extends React.Component {
    constructor() {
        super();

        this.state = initialState();
        this.findRaceIndex = findRaceIndexBuilder.apply(this);
        this.selectFaction = selectFactionBuilder.apply(this);
        this.unselectFaction = unselectFactionBuilder.apply(this);

        this.renderFactionList = renderFactionListBuilder.apply(this);

        this.renderFactionSelector = renderFactionSelectorBuilder.apply(this);

    }

    render() {
        return (
            <Router>
                <Route render={({location}) => {
                    return <div>
                        <ButtonBar/>
                        <TransitionGroup>
                            <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                <Switch location={location}>
                                    <Route exact path="/factions" render={this.renderFactionList}/>
                                    <Route exact render={this.renderFactionSelector}/>
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                }}>
                </Route>
            </Router>
        )
    }
}

module.exports = TI4Cheat;