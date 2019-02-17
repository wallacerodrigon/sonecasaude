import { DrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from '../../pages/home/Home';
import {Image} from 'react-native';

const imgLogo = require('../../assets/img/logo-login.png');

const MenuToolbar = DrawerNavigator({
        Home: {
        screen: HomeScreen,
        },
    // Notifications: {
    //   screen: MyNotificationsScreen,
    // },
      }, 
      {
        contentComponent: (props) => (
            <View>
                <Image src={imgLogo} width="32" height="32"/>
                <Text>Nome do Usuário</Text>
                <DrawerItems {...props} />
                <Text>Sair</Text>
            </View>
        )
  });   