import React from 'react';
import { underline } from 'ansi-colors';
import { Jumbotron } from 'react-bootstrap';

export function Scoreboard(props) {
    return (
        <div className="Scoreboard">
            {props.playerList !== underline && props.playerList.length > 0 &&
                <div>
                <h1>Scoreboard</h1>
                    {props.playerList.map((element, index) => (
                        <Jumbotron className="with-left-margin with-right-margin jumbo" key={index}>
                            <div className="position">{index + 1}</div>
                            <div className="name">{element.name}</div>
                            <div className="score">{element.points}p</div>
                        </Jumbotron>
                  ))}
                </div>
            }
        </div>   
    );
}
