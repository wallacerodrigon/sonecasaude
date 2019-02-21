
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import ListaMedicos from './pages/medicos/ListaMedicos';
import ControleMedicacao from './pages/medicacao/ControleMedicacao';

const Menu = DrawerNavigator({
  Item1: {
      screen: ListaMedicos,
    },
  Item2: {
      screen: ControleMedicacao,
    },

  }, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

export default Menu;