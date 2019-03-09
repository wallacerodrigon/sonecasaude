import React from 'react';
import { createStackNavigator } from "react-navigation";
import EstilosComuns from "../../assets/estilos/estilos";
import { BotaoMenuHamburguer, BotaoMicrofoneHeader } from "../../components/botao/Botao";
import { TELA_PADRAO } from "../../constants/AppScreenData";
import ComandoOuvindoVoz from "../voz/ComandoOuvindoVoz";
import HomeScreen from "./Home";

const HomeScreenNavigator = createStackNavigator(
  {
    home: {screen: HomeScreen,
        navigationOptions: {
          headerRight: null
        }
    },
    comandoVoz: {screen: ComandoOuvindoVoz,
      navigationOptions: {
        header: null
      }
    }
  },

  {
    defaultNavigationOptions: ({navigation}) => ({
      title: TELA_PADRAO.title,
      headerStyle: [ EstilosComuns.backgroundToolbar],
      headerTitleStyle: [EstilosComuns.corBranca],
      cardShadowEnabled: "true",
      headerTitleStyle: [EstilosComuns.corBranca],  
      headerLeft: (
        <BotaoMenuHamburguer navigation={navigation}/>
      ),
      headerRight: (
        <BotaoMicrofoneHeader navigation={navigation}/>
      )      
    })
  }
);
export default HomeScreenNavigator;