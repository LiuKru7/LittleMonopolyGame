import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeHaveStreets, changeMoney } from '../features/gameInfo';

const PlayerInfo = () => {
    const info = useSelector(state => state.gameInfo);
    const dispatch = useDispatch();

    function sellStreet(id) {
        const sellInfo = info.haveStreets.find(street => street.id === id);
        const sell = info.haveStreets.filter(street => street.id !== id);
        dispatch(changeHaveStreets(sell));
        dispatch(changeMoney(info.money + (sellInfo.price / 2)));
    }

    const sortedStreets = [...info.haveStreets].sort((a, b) => a.id - b.id);

    return (
        <div className="playerInfo">
            <h1 className="t-center">Money: {info.money} $</h1>
            {sortedStreets.map((x, i) => (
                <div className="d-flex j-space-between p-10 m-10 border-radius-10" key={i} style={{ backgroundColor: x.color }}>
                    <div className="flex3 ">{x.street}</div>
                        <button className="sellButton" onClick={() => sellStreet(x.id)}>sell  (+{x.price / 2}$)</button>
                </div>
            ))}
        </div>
    );
};

export default PlayerInfo;
