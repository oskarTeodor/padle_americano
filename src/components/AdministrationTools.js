import React from 'react';
import {ButtonToolbar, Button, Form, DropdownButton, Dropdown} from 'react-bootstrap'
export class AdministrationTools extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playerName: undefined,
            playerPoints: 0,
            playerFormVisible: false,
            pointsFormVisible: false,
        }
        
        this.togglePlayerForm = this.togglePlayerForm.bind(this);
        this.togglePointsForm = this.togglePointsForm.bind(this);
        this.handlePlayerNameSet = this.handlePlayerNameSet.bind(this);
        this.handleIncrementPoints = this.handleIncrementPoints.bind(this);
    } 

    togglePlayerForm(bool) {
        this.setState({
            playerFormVisible: bool,
        });
    }

    togglePointsForm(bool) {
        this.setState({
            pointsFormVisible: bool,
        });
    }

    handlePlayerNameSet() {
        this.props.populatePlayer({name: this.state.playerName, points: 0});
        this.togglePlayerForm(false);
    }

    handleIncrementPoints() {
        this.props.incrementPoints(this.state.playerName, this.state.playerPoints);
        this.togglePointsForm(false);
    }

    render () {
        return ( 
          <div className="AdministrationTools">
              <div>
              <ButtonToolbar>
                <Button className="with-left-margin with-bottom-margin" aria-label="Knapp för att lägga till spelare" disabled={(this.state.pointsFormVisible || this.props.players.length > 3)} variant="outline-secondary" onClick={() => this.togglePlayerForm(true)}>
                    Lägg till ny spelare
                </Button>
                <Button className="with-left-margin with-bottom-margin" aria-label="Knapp för att lägga till spelare" disabled={this.state.pointsFormVisible} variant="outline-secondary" onClick={() => this.togglePointsForm(true)}>
                    Lägg till poäng
                </Button>
                </ButtonToolbar>
                </div>
                {this.state.playerFormVisible &&
                <div className="with-top-margin form">
                    <Form.Control className="with-bottom-margin with-top-margin" size="lg" type="text" placeholder="Spelarnamn" onChange={(evt) => this.setState({playerName: evt.target.value})}/>
                    <ButtonToolbar>
                        <Button className="with-right-margin" aria-label="Knapp för att spara spelare" variant="outline-secondary" onClick={this.handlePlayerNameSet}>
                            Spara spelare
                        </Button>
                        <Button aria-label="Knapp för att avbryta" variant="outline-secondary" onClick={() => this.togglePlayerForm(false)}>
                            Avbryt
                        </Button>
                    </ButtonToolbar>
                </div>
                }
                {this.state.pointsFormVisible && this.props.players.length > 0 &&
                <div className="with-top-margin form">
                    <DropdownButton id="dropdown-basic-button" className="with-bottom-margin" variant="Secondary" title="Välj spelare">
                        {this.props.players.map((element, index) => (
                            <Dropdown.Item key={index} href="/#" onClick={() => this.setState({playerName: element.name})}>{element.name}</Dropdown.Item>
                        ))}
                    </DropdownButton>
                    <Form.Control className="with-bottom-margin" size="lg" type="number" placeholder="Poäng" onChange={(evt) => this.setState({playerPoints: parseInt(evt.target.value)})}/>
                    <ButtonToolbar>
                        <Button className="with-right-margin" aria-label="Knapp för att addera spelapoäng" variant="outline-secondary" onClick={this.handleIncrementPoints}>
                            Spara poäng
                        </Button>
                        <Button aria-label="Knapp för att avbryta" variant="outline-secondary" onClick={() => this.togglePointsForm(false)}>
                            Avbryt
                        </Button>
                    </ButtonToolbar>
                </div>
                }
          </div>
      );      
    }
}

export default (AdministrationTools);