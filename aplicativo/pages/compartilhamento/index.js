import React from "react";
import { createStackNavigator } from 'react-navigation';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import { BotaoMicrofoneHeader } from '../../components/botao/Botao';
import { TELA_PADRAO } from '../../constants/AppScreenData';
import CadastroCompartilhamento from '../compartilhamento/CadastroCompartilhamento';
import ComandoOuvindoVoz from '../voz/ComandoOuvindoVoz';
import CadastroCompartilhamentoLogado from './CadastroCompartilhamentoLogado';
import ListaCompartilhamento from './ListaCompartilhamento';

const CompartilhamentoNavigator = createStackNavigator(
    {
        listaCompartilhamento: ListaCompartilhamento,
        cadastroCompartilhamento: CadastroCompartilhamentoLogado,
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