import React from 'react';
import GameTable from "../components/GameTable";
import PlayerInfo from "../components/PlayerInfo";

const Game = () => {
        return (
            <div className="d-flex">
                <GameTable/>
                <PlayerInfo/>
            </div>
        );
};

export default Game;