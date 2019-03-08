import React from 'react';
import { createStackNavigator } from "react-navigation";
import EstilosComuns from "../../assets/estilos/estilos";
import { BotaoMenuHamburguer, BotaoMicrofoneHeader } from "../../components/botao/Botao";
import { TELA_PADRAO } from "../../constants/AppScreenData";
import MedicacoesNavigator from "../medicacao";
import ComandoOuvindoVoz from "../voz/ComandoOuvindoVoz";
import HomeScreen from "./Home";

const HomeScreenNavigator = createStackNavigator(
  {
    home: {screen: HomeScreen},
    comandoVoz: ComandoOuvindoVoz,
    controleMedicacao: MedicacoesNavigator
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: TELA_PADRAO.title,
      headerStyle: [ EstilosComuns.backgroundToolbar],
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