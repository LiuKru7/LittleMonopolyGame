import React from 'react';
import RolDice from "./RolDice";
import {useDispatch, useSelector} from "react-redux";
import {changeMoney, changeHaveStreets} from "../features/gameInfo";

const gameTableInfo = [
    {id: 1, street: "", color: "", price: 0},
    {id: 2, street: "Baranausko", color: "#a8ff9a", price: 150},
    {id: 3, street: "Taikos", color: "#a8ff9a", price: 200},
    {id: 4, street: "Oxford", color: "#9ac2ff", price: 200},
    {id: 5, street: "Regent", color: "#9ac2ff", price: 250},
    {id: 6, street: "Carnaby", color: "#9ac2ff", price: 250},
    {id: 20, street: "Aker Brygge", color: "#eccf9d", price: 300},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 7, street: "Unter Linden", color: "#f8a1a1", price: 300},
    {id: 19, street: "Grünerløkka", color: "#eccf9d", price: 350},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 8, street: "Kurfürstendam", color: "#f8a1a1", price: 350},
    {id: 18, street: "Panepistimiou", color: "#eccf9d", price: 400},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 9, street: "Friedrichstraße", color: "#f8a1a1", price: 400},
    {id: 17, street: "Adrianou", color: "#a2f5dc", price: 400},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 0, street: "", color: "", price: ""},
    {id: 10, street: "Élysées", color: "#eff5a2", price: 425},
    {id: 16, street: "Ermou", color: "#a2f5dc", price: 425},
    {id: 15, street: "Via Condotti", color: "#f5a2c5", price: 450},
    {id: 14, street: "Via Veneto", color: "#f5a2c5", price: 450},
    {id: 13, street: "Via del Corso", color: "#f5a2c5", price: 450},
    {id: 12, street: "Montmartre ", color: "#eff5a2", price: 475},
    {id: 11, street: "Rue de Rivoli", color: "#eff5a2", price: 475},
];

const GameTable = () => {
    const dispatch = useDispatch()
    const info = useSelector(state=>state.gameInfo)

    function getStreetById(id) {
        const streetsWithId = gameTableInfo.filter(street => street.id === id);
        if (info.money>= streetsWithId[0].price) {
            dispatch(changeMoney(info.money-streetsWithId[0].price))
            console.log(streetsWithId[0].price)
            dispatch(changeHaveStreets([...info.haveStreets, streetsWithId[0]]))
        }
    }
    function buy(value) {

        if (info.position === value.id ) {
            if (value.price===0) return  console.log(value.price)
            const streetToBuy = info.haveStreets.find(street => street.id === value.id);
            if (!streetToBuy) {
                return (
                    <div>
                        <button className="buyButton t-bold t-size-verySmall" onClick={()=>getStreetById(value.id)}>BUY</button>
                    </div>
                );
            }
        }
    }

    return (
        <div>
            <div className="grid-container">
                {gameTableInfo.map((value, index) => (
                    <div key={index} className={`grid-cell cell-${value.id}`} >
                        <div className="p-7" style={{backgroundColor:value.color}}>  </div>
                        <div className="t-bold t-size-small">{value.street}</div>
                        {value.price!==0 && <div className="t-size-verySmall">Price: {value.price}$</div>}
                        {buy(value) && buy(value)}
                        {info.position===value.id&& <div className="figureGo"><img src={info.figureUrl} alt=""/>
                        </div>}
                    </div>
                ))}
                <RolDice/>
            </div>
        </div>
    );
};

export default GameTable;