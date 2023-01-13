import './DropdownMenu.scss';
import React from 'react';
import { AppContext } from '../../App';


const DropdownMenu = () => {

    const {activeMenu} = React.useContext(AppContext)

    return (
        <div className={activeMenu ? 'DropdownMenu active' : 'DropdownMenu'}>
            <a href="">Look at our work</a>
            <a href="">Write a feedback</a>
            <button>Submit your application</button>
        </div>
    )
}

export { DropdownMenu };
