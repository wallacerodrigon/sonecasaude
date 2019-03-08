import { Icon } from "native-base";
import React from 'react';
import { createStackNavigator, withNavigation } from "react-navigation";
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import { TELA_COMANDO_VOZ, TELA_PADRAO } from "../../constants/AppScreenData";
import CadastroMedicamento from "../medicamentos/CadastroMedicamento";
import ComandoOuvindoVoz from "../voz/ComandoOuvindoVoz";
import HomeScreen from "./Home";

const HomeScreenNavigator = createStackNavigator(
  {
    home: {screen: HomeScreen},
    medicamentos: {screen: CadastroMedicamento},
    comandoVoz: ComandoOuvindoVoz
    // medicos: ListaMedicos,
    // controleMedicacao: ControleMedicacao
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: TELA_PADRAO.title,
      headerStyle: [ EstilosComuns.backgroundToolbar],
      cardShadowEnabled: "true",
      headerTitleStyle: [EstilosComuns.corBranca],  
      headerLeft: (
        <Icon name="menu" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
              onPress={() => navigation.toggleDrawer()}/>
      ),
      headerRight: (
        <Icon name="mic" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
              onPress={() => navigation.navigate(TELA_COMANDO_VOZ.name)}/>
      )      



    })
  }
 // this.props.navigation.pop();
 //this.props.navigation.push('Profile');
);
export default withNavigation(HomeScreenNavigator);