import React from "react";
import { createDrawerNavigator } from 'react-navigation';
import SideBarMenu from "../components/menu/SideBarMenu";
import CompartilhamentoNavigator from "../pages/compartilhamento/";
import HomeScreenNavigator from "../pages/home";
import MedicacoesNavigator from "../pages/medicacao";
import MedicosNavigator from "../pages/medicos";
import MedicamentosNavigator from "../pages/medicamentos";
import EstilosComuns, { FUNDO_ESCURO, BRANCO } from "../assets/estilos/estilos";
import { TELA_PADRAO } from "../constants/AppScreenData";



const NavigatorLoggedIn = createDrawerNavigator(
    {
        home: HomeScreenNavigator,
        medicacoesNavigator:MedicacoesNavigator,                                         
        medicosNavigator: MedicosNavigator,                                  
        compartilhamentosNavigator: CompartilhamentoNavigator,
        medicamentosNavigator: MedicamentosNavigator
    },
    {
        defaultNavigationOptions: {
            title: TELA_PADRAO.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            headerTintColor: BRANCO, //muda a cor da seta
            cardShadowEnabled: "true",
            borderBottomColor: FUNDO_ESCURO,
            headerTitleStyle: {
                color: BRANCO,
                fontSize: 18
            },            
        },
        contentComponent      : props => 
             <SideBarMenu {...props}/>
        ,
    }    
);

export default NavigatorLoggedIn;