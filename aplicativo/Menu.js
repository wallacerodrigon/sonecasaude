import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Drawer } from 'native-base';

export class DrawerMenu extends Component {
  
  render(){
      closeDrawer = () => {
        this.drawer._root.close()
      };
      openDrawer = () => {
        this.drawer._root.open()
      };
    
      return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideMenu navigator={this.navigator} />}
          onClose={() => this.closeDrawer()} >
        </Drawer>
      );
  }
}

export class SideMenu extends Component {
  render(){
    return (
        <View>
          <Text>Teste 1</Text>
          <Text>Teste 2</Text>
          <Text>Teste 3</Text>
        </View>
    );
  }
}


