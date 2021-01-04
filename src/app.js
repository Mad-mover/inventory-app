import React from "react";
import { BrowserRouter } from "react-router-dom";
import Store from "./components/store/Store";

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Store />
            </BrowserRouter>
        </div>
    );
};

export default App;
