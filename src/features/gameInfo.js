import {createSlice} from "@reduxjs/toolkit";

export const  gameInfoSlice = createSlice({
    name: "gameInfo",
    initialState:{
        figureUrl: "https://cdn0.iconfinder.com/data/icons/board-games-colored-1/48/Games_BoardGames_Artboard_8-512.png",
        position: 1,
        money: 1500,
        haveStreets: [],
        diceValue: 0,
        error: ""
    }
    ,
    reducers: {
        figureUpdate: (state, action) => {
            state.figureUrl = action.payload
        },
        changePosition : (state,action) => {
            state.position= action.payload
        },
        changeMoney : (state, action) => {
            state.money=action.payload
        },
        changeHaveStreets : (state,action)=> {
            state.haveStreets = action.payload
        },
        changeDiceValue : (state,action) => {
            state.diceValue = action.payload
        },
        changeError : (state, action) => {
            state.error = action.payload
        }
    }
})

export const { figureUpdate,
    changePosition,
    changeMoney,
    changeHaveStreets,
    changeDiceValue,
    changeError


} = gameInfoSlice.actions
export default gameInfoSlice.reducer