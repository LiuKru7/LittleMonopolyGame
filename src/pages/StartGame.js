import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {figureUpdate} from "../features/gameInfo";
import {useNavigate} from "react-router-dom";

const StartGame = () => {
    const dispatch = useDispatch ()
    const figureImg = [
        {
            img: "https://cdn0.iconfinder.com/data/icons/board-games-colored-1/48/Games_BoardGames_Artboard_8-512.png"
        },
        {
            img: "https://cdn0.iconfinder.com/data/icons/board-games-colored-1/48/Games_BoardGames_Artboard_5-512.png"
        },
        {
            img: "https://www.wftv.com/resizer/ga_-NI_y_BmgAbbp78eUtboki5w=/arc-anglerfish-arc2-prod-cmg/public/H2JAE62D4RA4HFQOSYOFQHJOFM.png"
        },
        {
            img: "https://fox8.com/wp-content/uploads/sites/12/2022/04/Hat.png"
        }
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
                        style={{
                            backgroundColor: x.img === figure ? "green" : ""
                        }}
                    >
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