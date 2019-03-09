import { createStackNavigator } from 'react-navigation';
import { BotaoMenuHamburguer, BotaoMicrofoneHeader } from '../../components/botao/Botao';
import CadastroCompartilhamento from '../compartilhamento/CadastroCompartilhamento';
import ListaCompartilhamento from './ListaCompartilhamento';
import { TELA_PADRAO } from '../../constants/AppScreenData';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import React from "react";
import ComandoOuvindoVoz from '../voz/ComandoOuvindoVoz';

const CompartilhamentoNavigator = createStackNavigator(
    {
        listaCompartilhamento: ListaCompartilhamento,
        cadastroCompartilhamento: CadastroCompartilhamento,
        cadastroCompartilhamentoFromList: CadastroCompartilhamento,
        comandoVoz: ComandoOuvindoVoz
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
          title: TELA_PADRAO.title,
          headerStyle: [ EstilosComuns.backgroundToolbar],
          cardShadowEnabled: "true",
          headerTintColor: BRANCO,

          headerTitleStyle: [EstilosComuns.corBranca],  
          headerRight: (
            <BotaoMicrofoneHeader navigation={navigation}/>
          )      
        })
      }      
);

export default CompartilhamentoNavigator;