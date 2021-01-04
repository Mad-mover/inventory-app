import React from "react";
import Select from "react-select";

const SelectComponent = (props) => {
    const stores = [
        { value: "main store", label: "Main Store" },
        { value: "other store", label: "Other Store" },
    ];
    const categories = [
        { value: "school", label: "school" },
        { value: "plastics", label: "Plastics" },
    ];

    function customStyles(theme) {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary: "#1E441E", // Selected text
                primary25: "#1E441E", // other options
                neutral0: "#000", // container BG
                neutral20: "#1E441E", // container border and inner divider
                neutral50: "#333", // container text color
                neutral80: "#ccc", // container input color
            },
        };
    }
    return (
        <div className="select">
            <Select
                defaultValue={stores[0]}
                theme={customStyles}
                className='react-select'
                isSearchable
                placeholder='Select Store'
                options={stores}
            />
            <Select
            defaultValue={categories[0]}
                theme={customStyles}
                className='react-select'
                isSearchable
                placeholder='Select Category'
                options={categories}
            />
        </div>
    );
};

export default SelectComponent;
