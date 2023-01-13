import './App.scss';
import React from 'react';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu';
import { Main } from './components/Main/Main';
import { SideBar } from './components/SideBar/SideBar';
import { AboutCompany } from './components/AboutCompany/AboutCompany';

export const AppContext = React.createContext();

const App = () => {

  const [activeMenu, setActiveMenu] = React.useState(false)
  const changeStateMenu = () => {
      setActiveMenu(!activeMenu)
  }

  return (
    <AppContext.Provider value={{changeStateMenu, activeMenu}} >
      <div className="App">
        <SideBar />
        <div className="container">
          <DropdownMenu />
          <Main />
          <AboutCompany />
        </div>
      </div>      
    </AppContext.Provider>
  );
}

export { App };
