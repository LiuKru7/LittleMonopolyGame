import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePosition, changeMoney, changeDiceValue, changeError } from "../features/gameInfo";
import dice1 from "../images/dice-1.png"
import dice2 from "../images/dice-2.png"
import dice3 from "../images/dice-3.png"
import dice4 from "../images/dice-4.png"
import dice5 from "../images/dice-5.png"
import dice6 from "../images/dice-6.png"
import dice0 from "../images/startGame.png"
import diceAll from "../images/diceAll.gif"


const RolDice = () => {
    const diceImages = [
        dice0,
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ];

    const dispatch = useDispatch();
    const [rolling, setRolling] = useState(false);

    const position = useSelector(state => state.gameInfo.position);
    const money = useSelector(state => state.gameInfo.money);
    const figure = useSelector(state => state.gameInfo.figureUrl);
    const diceNumber = useSelector(state => state.gameInfo.diceValue);
    const error = useSelector(state => state.gameInfo.error);


    function random() {

        if (!figure || rolling) return;
        setRolling(true);
        dispatch(changeError(""));
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            dispatch(changeDiceValue(randomNumber));
            setRolling(false);
            if (position + randomNumber < 21) {
                dispatch(changePosition(position + randomNumber));
            } else if (position + randomNumber > 20) {
                dispatch(changePosition(position + randomNumber - 20));
                dispatch(changeMoney(money + 200));
            }
        }, 2000);
    }


    function rollDice() {
        return diceAll;
    }

    return (
        <div className="rolDice t-center a-center d-flex f-col j-center">
            {error && <div className="p-10 errorText">{error}</div>}

            <img src={rolling ? rollDice() : diceImages[diceNumber]} alt={`Dice ${diceNumber}`} />

            <button className="p-10 m-10" onClick={random} disabled={rolling}>
                ROLL DICE
            </button>
        </div>
    );
};

export default RolDice;