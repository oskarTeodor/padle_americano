import React from 'react';
import './App.css';
import { Scoreboard } from './components/Scoreboard';
import { AdministrationTools } from './components/AdministrationTools';

export class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    players: [],
  }
  this.populatePlayer = this.populatePlayer.bind(this);
  this.incrementPoints = this.incrementPoints.bind(this);
}

populatePlayer(player) {
  const tmpArray = this.state.players;
  tmpArray.push(player);
  this.setState({players: tmpArray});
} 

incrementPoints(name, points) {
  const tmpArray = this.state.players;
  const player = tmpArray.find(player => player.name === name);
  player.points += points;
  tmpArray.sort(function(a, b){return b.points-a.points});
  this.setState({players: tmpArray});
}

render () {  
  return (
    <div className="App">
      {this.state.players.length > 0 &&
        <Scoreboard playerList={this.state.players}/>
      }
      <AdministrationTools players={this.state.players} populatePlayer={this.populatePlayer} incrementPoints={this.incrementPoints}/>
    </div>
    );
  }

}

export default (App);
