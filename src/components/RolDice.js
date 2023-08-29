import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePosition, changeMoney, changeDiceValue, changeError } from "../features/gameInfo";

const RolDice = () => {
    const diceImages = [
        "https://png.pngtree.com/png-clipart/20210311/original/pngtree-game-start-neon-light-design-png-image_5982643.png",
        "http://www.clker.com/cliparts/X/w/P/Y/q/H/dice-1-md.png",
        "http://www.clker.com/cliparts/X/V/S/C/I/x/dice-2-md.png",
        "http://www.clker.com/cliparts/n/O/d/R/Y/c/dice-3-md.png",
        "http://www.clker.com/cliparts/D/j/Z/R/5/P/dice-4-md.png",
        "http://www.clker.com/cliparts/U/N/J/F/T/x/dice-5-md.png",
        "http://www.clker.com/cliparts/Y/O/V/X/F/D/dice-6-md.png"
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
        return "https://i.imgflip.com/1iq9mu.gif";
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