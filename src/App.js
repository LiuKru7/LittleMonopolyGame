import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartGame from "./pages/StartGame";
import Game from "./pages/Game";


const App = () => {

    return (
        <div className="d-flex f-col a-center container">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<StartGame/>}/>
                    <Route path={"/game"} element={<Game />}/>;
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;