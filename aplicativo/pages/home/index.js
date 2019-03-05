import HomeScreen from "./Home";
import React from 'react';
import {  createStackNavigator} from "react-navigation";
import ListaMedicos from "../medicos/ListaMedicos";
import CadastroMedicamento from "../medicamentos/CadastroMedicamento";
import ControleMedicacao from "../medicacao/ControleMedicacao";
import { TELA_PADRAO, TELA_COMANDO_VOZ } from "../../constants/AppScreenData";
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import { Text , View} from "react-native";
import { Icon } from "native-base";

const HomeScreenNavigator = createStackNavigator(
  {
    home: HomeScreen,
    medicamentos: CadastroMedicamento,
    medicos: ListaMedicos,
    controleMedicacao: ControleMedicacao
  },
  {
    defaultNavigationOptions: {
      title: TELA_PADRAO.title,
      headerStyle: [ EstilosComuns.backgroundToolbar],
      cardShadowEnabled: "true",
      headerTitleStyle: [EstilosComuns.corBranca],  
      headerLeft: ({navigation}) => (
        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
          <Icon name="menu" style={{color: BRANCO}} onPress={() => navigation.openDrawer() }/>
        </View>
      ),
      headerRight: ({navigation}) => (
        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
          <Icon name="microphone" style={{color: BRANCO}} onPress={() => navigation.navigate(TELA_COMANDO_VOZ.name) }/>
        </View>
      )

    }
  }
 // this.props.navigation.pop();
 //this.props.navigation.push('Profile');
);
export default HomeScreenNavigator;