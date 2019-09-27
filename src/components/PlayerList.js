import React from 'react';

function PlayerList(props) {
    
    return (
        <div>
            {(props.players !== undefined && props.players.length > 0) &&
                <ul>
                    props.players.map(element => {
                        <li>{element}</li>
                    })
                </ul> 
            }
        </div>
        
        );
}

export default PlayerList;