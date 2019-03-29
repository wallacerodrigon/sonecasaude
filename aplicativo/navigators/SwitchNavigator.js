import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import NavigatorNotLoggedIn from './NavigatorNotLoggedIn';
import NavigatorLoggedIn from './NavigatorLoggedIn';
import { TAG_USUARIO_LOGADO, teste } from '../constants/ConstantesInternas';
import { getValoresStorage } from '../components/comuns/UtilStorage';


const SwitchNavigator = createSwitchNavigator(
  {
    navigatorLoggedIn: NavigatorLoggedIn,
    navigatorNotLoggedIn: NavigatorNotLoggedIn,

  },
);

async function getInitialRoute(switchNavigator){
  const logado = await Math.round( Math.random() * 10 );
  console.log('logado:',logado);

  const initialRoute = logado % 2 == 0 ? 'navigatorLoggedIn' : 'navigatorNotLoggedIn';

  console.log('switch:',switchNavigator.switchConfig);
//  switchNavigator.switchConfig.initialRouteName = initialRoute;  
  // getValoresStorage(TAG_USUARIO_LOGADO)
  // .then( logado =>  {
  // })
 // .catch( erro => console.log(erro))
  //console.log(logado);
}

//getInitialRoute(SwitchNavigator);

export default createAppContainer(SwitchNavigator);