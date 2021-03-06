import React from "react";
import { createBottomTabNavigator } from 'react-navigation';
import EstilosComuns, { BRANCO, MARCADO, PRETO, VERDE } from "../../assets/estilos/estilos";
import { BotaoFecharHeader } from '../../components/botao/Botao';
import { TELA_ADD_MEDICOS } from "../../constants/AppScreenData";
import AdicionaMedico from "./AdicionaMedico";
import ClinicasMedico from "./ClinicasMedico";
import IconeTabBar from '../../components/comuns/IconeTabBar';
import ProcuraClinica from "./ProcuraClinica";

const AdicionaMedicoTab  = createBottomTabNavigator(
    {
        adicionarMedico: {
            screen: AdicionaMedico, 
            navigationOptions: () => ({
                tabBarLabel: 'Dados do médico',
                tabBarIcon: () => (
                    <IconeTabBar iconName="medkit"/>
                )
            }),
        },   
        clinicasMedico: {
            screen: ClinicasMedico,
            navigationOptions: () => ({
                tabBarLabel: 'Clínicas do médico',
                tabBarIcon: () => (
                    <IconeTabBar iconName="business"/>
                )
            }),
        },         
        procuraClinica: {
            screen: ProcuraClinica,
            navigationOptions: () => ({
                tabBarLabel: 'Buscar clínicas',
                tabBarIcon: () => (
                    <IconeTabBar iconName="search"/>
                )
            }),
        },                               
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: TELA_ADD_MEDICOS.title,
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

export default AdicionaMedicoTab;


