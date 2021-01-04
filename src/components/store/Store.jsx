import React from "react";
import Navbar from "../navbar/Navbar";
import Items from "./Items";
import SelectComponent from "./Select";

const Store = () => {
    
    
    return (
        <div className='store'>
            <Navbar page='Store' />
            <SelectComponent />
            <Items />
        </div>
    );
};

export default Store;
