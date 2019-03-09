import { createBottomTabNavigator } from 'react-navigation';
import EstilosComuns, { VERDE, BRANCO, FUNDO, FUNDO_ESCURO, MARCADO, PRETO } from '../../assets/estilos/estilos';
import { TELA_CONTROLE_MEDICACAO } from '../../constants/AppScreenData';
import ListaCompartilhamento from '../compartilhamento/ListaCompartilhamento';
import ControleMedicacao from "./ControleMedicacao";
import EstatisticaHistoricoUso from './EstatisticaHistoricoUso';
import React from "react";
import { Icon } from 'native-base';
import { BotaoFecharHeader } from '../../components/botao/Botao';
import HistoricoUsoPorData from './HistoricoUsoPorData';
import Medicacao from './Medicacao';
import IconeTabBar from './IconeTabBar';

const MedicacoesNavigator = createBottomTabNavigator(
    {
        controleMedicacao: {
            screen: Medicacao,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <IconeTabBar iconName="medkit"/>
                )
            })
        },   
        historicoUso: {
            screen: HistoricoUsoPorData,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <IconeTabBar iconName="calendar"/>
                )
            })

        },                             
        estatisticaMedicacao: {
            screen: EstatisticaHistoricoUso,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <IconeTabBar iconName="stats"/>                
                )
            })

        },
    
        listaCompartilhamento: {
            screen: ListaCompartilhamento,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <IconeTabBar iconName="share"/>
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
          activeTintColor: BRANCO, // active icon color
          activeBackgroundColor: MARCADO, //fundo azul quando ativo
          inactiveTintColor: PRETO,  // inactive icon color
          //inactiveBackgroundColor: FUNDO,
          style: {
              backgroundColor: VERDE // TabBar background
          }          
        },        
    }  
);

export default MedicacoesNavigator;