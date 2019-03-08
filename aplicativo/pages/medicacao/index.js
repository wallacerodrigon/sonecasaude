import { createBottomTabNavigator } from 'react-navigation';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_CONTROLE_MEDICACAO } from '../../constants/AppScreenData';
import ListaCompartilhamento from '../compartilhamento/ListaCompartilhamento';
import ControleMedicacao from "./ControleMedicacao";
import EstatisticaHistoricoUso from './EstatisticaHistoricoUso';
import React from "react";

const MedicacoesNavigator = createBottomTabNavigator(
    {
        controleMedicacao: {
            screen: ControleMedicacao,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="bookmark"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },                        
        estatisticaMedicacao: EstatisticaHistoricoUso,
        listaCompartilhamento: ListaCompartilhamento
    },
    {
        defaultNavigationOptions: {
            title: TELA_CONTROLE_MEDICACAO.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],  
        },
        tabBarOptions: {
          showLabel: false, // hide labels
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        //   activeTintColor: '#F8F8F8', // active icon color
        //   inactiveTintColor: '#586589',  // inactive icon color
        //   style: {
        //       backgroundColor: '#171F33' // TabBar background
        //   }          
        },        
    }  
);

export default MedicacoesNavigator;