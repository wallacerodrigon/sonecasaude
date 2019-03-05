import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import NavigatorNotLoggedIn from './NavigatorNotLoggedIn';
import NavigatorLoggedIn from './NavigatorLoggedIn';


const SwitchNavigator = createSwitchNavigator(
  {
    navigatorNotLoggedIn: NavigatorNotLoggedIn,
    navigatorLoggedIn: NavigatorLoggedIn,

  },
  {
    initialRouteName: 'navigatorNotLoggedIn',
  }
);

export default createAppContainer(SwitchNavigator);