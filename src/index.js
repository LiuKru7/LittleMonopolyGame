import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import gameInfoReducer from "./features/gameInfo";



const store = configureStore({
    reducer: {
        gameInfo: gameInfoReducer,
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>

);

