import './SideBar.scss';
import { Menu } from './Menu/Menu';
import { Links } from './Links/Links';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';


const SideBar = () => {
    return (
        <div className='SideBar'>
            <div className="topContainer">
                <div className="Logo">
                    <img src="assets/images/Soul_Radiance_logo.png" alt="logo" />
                </div>
                <Menu />         
            </div>
            <div className="bottomContainer">
                <Links />
            </div>
            {/* <DropdownMenu /> */}
        </div>
  )
}

export { SideBar };
