import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePosition, changeMoney, changeDiceValue,} from "../features/gameInfo";

const RolDice = () => {
    const dispatch = useDispatch ()
    const position = useSelector(state=> state.gameInfo.position)
    const money =useSelector(state=> state.gameInfo.money)
    const figure = useSelector(state => state.gameInfo.figureUrl)
    const diceNumber = useSelector(state => state.gameInfo.diceValue)
    const [diceValue, setDiceValue] = useState()
    function random () {
        if (!figure) return
        const randomNumber = Math.floor(Math.random()*6)+1
        dispatch(changeDiceValue(randomNumber))
        setDiceValue(randomNumber)
        if (position+randomNumber<21) return  dispatch(changePosition(position+randomNumber))
        if (position+randomNumber>20) {
            dispatch(changePosition(position+randomNumber-20))
            dispatch(changeMoney(money+200))
        }
    }
    return (
        <div className="rolDice t-center">
            <h1>ROLL DICE</h1>
            {diceNumber===1 && <img src="http://www.clker.com/cliparts/X/w/P/Y/q/H/dice-1-md.png" alt=""/>}
            {diceNumber===2 && <img src="http://www.clker.com/cliparts/X/V/S/C/I/x/dice-2-md.png" alt=""/>}
            {diceNumber===3 && <img src="http://www.clker.com/cliparts/n/O/d/R/Y/c/dice-3-md.png" alt=""/>}
            {diceNumber===4 && <img src="http://www.clker.com/cliparts/D/j/Z/R/5/P/dice-4-md.png" alt=""/>}
            {diceNumber===5 && <img src="http://www.clker.com/cliparts/U/N/J/F/T/x/dice-5-md.png" alt=""/>}
            {diceNumber===6 && <img src="http://www.clker.com/cliparts/Y/O/V/X/F/D/dice-6-md.png" alt=""/>}
            <h1>{diceValue}</h1>
            <button className="p-10" onClick={random}>ROLL</button>
            <div className="d-flex">
                <p></p>
            </div>
        </div>
    );
};

export default RolDice;