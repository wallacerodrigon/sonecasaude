import { createBottomTabNavigator } from 'react-navigation';
import EstilosComuns, { VERDE, BRANCO, FUNDO, FUNDO_ESCURO } from '../../assets/estilos/estilos';
import { TELA_CONTROLE_MEDICACAO } from '../../constants/AppScreenData';
import ListaCompartilhamento from '../compartilhamento/ListaCompartilhamento';
import ControleMedicacao from "./ControleMedicacao";
import EstatisticaHistoricoUso from './EstatisticaHistoricoUso';
import React from "react";
import { Icon } from 'native-base';
import { BotaoFecharHeader } from '../../components/botao/Botao';
import HistoricoUsoPorData from './HistoricoUsoPorData';
import Medicacao from './Medicacao';

const MedicacoesNavigator = createBottomTabNavigator(
    {
        controleMedicacao: {
            screen: HistoricoUsoPorData,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="medkit"
                        style={{color: BRANCO}}
                        size={24}
                    />
                )
            })
        },   
        historicoUso: {
            screen: HistoricoUsoPorData,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="calendar"
                        style={{color: BRANCO}}
                        size={24}
                    />
                )
            })

        },                             
        estatisticaMedicacao: {
            screen: EstatisticaHistoricoUso,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="stats"
                        style={{color: BRANCO}}
                        size={24}
                    />
                )
            })

        },
    
        listaCompartilhamento: {
            screen: ListaCompartilhamento,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    //MONTAR COMPONENTE
                    <Icon
                        name="share"
                        style={{color: BRANCO}}
                        size={24}
                    />
                )
            })

        }        
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: TELA_CONTROLE_MEDICACAO.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTintColor: BRANCO,
            headerTitleStyle: [EstilosComuns.corBranca],  
            headerLeft: (
                <BotaoFecharHeader navigation={navigation}/>
              )             
        }),
        tabBarOptions: {
          showLabel: true, // hide labels
          activeTintColor: FUNDO_ESCURO, // active icon color
          inactiveTintColor: FUNDO,  // inactive icon color
          style: {
              backgroundColor: VERDE // TabBar background
          }          
        },        
    }  
);

export default MedicacoesNavigator;