import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {figureUpdate} from "../features/gameInfo";
import {useNavigate} from "react-router-dom";
import figure1 from '../images/figure-1.png';
import figure2 from '../images/figure-2.png';
import figure3 from '../images/figure-3.avif';
import figure4 from '../images/figure-4.webp';

const StartGame = () => {
    const dispatch = useDispatch ()
    const figureImg = [
        { img: figure1 },
        { img: figure2 },
        { img: figure3 },
        { img: figure4 }
    ];
    const [figure, setFigure] = useState()
    const nav = useNavigate()

    function figureFunction () {
        if (!figure) return
        dispatch(figureUpdate(figure))
        nav("/game")
    }
    return (
        <div className="t-center startGameContainer">
            <h1>Choose a figure and play</h1>
            <div className="d-flex figuresBox">
                {figureImg.map((x,i)=> (
                    <div key={i}
                        onClick={() => { setFigure(x.img) }}
                        style={{backgroundColor: x.img === figure ? "green" : ""}}>
                        <img src={x.img} alt="" />
                    </div>
                    )
                )}
            </div>
            <button onClick={figureFunction}>Start Game</button>
        </div>
    );
};
export default StartGame;