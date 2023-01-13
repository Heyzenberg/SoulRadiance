import React from 'react';
import './Menu.scss';
import { AppContext } from '../../../App';

const Menu = () => {

    const {changeStateMenu, activeMenu} = React.useContext(AppContext);

    return (
        <div className={activeMenu ? "Menu active" : "Menu"} onClick={changeStateMenu}>
            <span></span>
        </div>   
    ) 
}

export { Menu };
