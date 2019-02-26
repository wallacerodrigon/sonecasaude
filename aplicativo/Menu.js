import React, { Component } from 'react';
import { createDrawerNavigator } from "react-navigation";
import SideBarMenu from './components/menu/SideBarMenu';
import HomeScreen from './pages/home/Home';


const DrawerMenu = createDrawerNavigator(
  // {
  //   Home: { screen: HomeScreen },
  // },
  {
    contentComponent: props => <SideBarMenu {...props} />
  }
);
export default DrawerMenu;



