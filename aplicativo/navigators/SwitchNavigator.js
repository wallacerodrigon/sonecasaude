import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import NavigatorNotLoggedIn from './NavigatorNotLoggedIn';
import NavigatorLoggedIn from './NavigatorLoggedIn';
import ControladorRouteScreen from '../pages/ControladorRouteScreen';


const SwitchNavigator = createSwitchNavigator(
  {
    initialScreen: ControladorRouteScreen,
    navigatorLoggedIn: NavigatorLoggedIn,
    navigatorNotLoggedIn: NavigatorNotLoggedIn,
  }
);

export default createAppContainer(SwitchNavigator);