import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DrawerNavigator } from 'react-navigation';
import {Menu} from './Menu';
import { AppContainer } from './rotas';

// const drawernav = DrawerNavigator({
//     drawer: {
//         screen: AppContainer,
//       }
//     }, {
//       contentComponent: Menu,
//       drawerWidth: Dimensions.get('window').width - 120,  
//   });

// AppRegistry.registerComponent('drawer', () => drawernav);
AppRegistry.registerComponent(appName, () => App);
