import {
    Assessment,
    Home,
    KeyboardArrowRight,
    Menu,
    MonetizationOn,
    Settings,
    ShoppingCart,
    Store,
} from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <nav className='navbar'>
            <div className='logo'>Logo</div>
            <div className='space'>{props.page}</div>
            <div className='hamburger'>
                <Menu className='svg' onClick={() => setOpenMenu(!openMenu)} />
            </div>
            {openMenu && (
                <div className='sheet' onClick={() => setOpenMenu(false)}></div>
            )}
            <div className={`menu ${openMenu && "menu-open"}`}>
                <MenuComponent leftIcon={<Home />}>Home</MenuComponent>
                <MenuComponent leftIcon={<Store />}>Store</MenuComponent>
                <MenuComponent leftIcon={<MonetizationOn />}>
                    Sales
                </MenuComponent>
                <MenuComponent leftIcon={<ShoppingCart />}>
                    Purchases
                </MenuComponent>
                <MenuComponent leftIcon={<Assessment />}>Reports</MenuComponent>
                <MenuComponent
                    leftIcon={<Settings />}
                    rightIcon={<KeyboardArrowRight />}>
                    Settings
                </MenuComponent>
            </div>
        </nav>
    );
};

export default Navbar;

function MenuComponent(props) {
    return (
        <Link className='menu-links' to='/'>
            <div className='left-icon'>{props.leftIcon}</div>
            <span>{props.children}</span>
            <div className='right-icon'>{props.rightIcon}</div>
        </Link>
    );
}
