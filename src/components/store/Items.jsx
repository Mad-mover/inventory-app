import React from "react";

const Items = () => {
    return (
        <div className='items'>
            <Item />
        </div>
    );
};

export default Items;

function Item(props) {
    return (
        <div className='item'>
            <div className='img'>Image</div>
            <div className='content'>
                <div className='top'>
                    <div className='item-name'>Item Name</div>
                    <div className='spacer'></div>
                    <div className='item-date'>Jan 1 2021</div>
                </div>
                <div className='bottom'>
                    <div className='item-count'>
                        Amount <big>20</big>
                    </div>
                    <div className='spacer'>=</div>
                    <div className='unit-price'>
                        <small>Ksh </small>2000
                    </div>
                </div>
            </div>
        </div>
    );
}
