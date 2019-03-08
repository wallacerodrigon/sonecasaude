import React from "react";
import { createDrawerNavigator } from 'react-navigation';
import SideBarMenu from "../components/menu/SideBarMenu";
import CompartilhamentoNavigator from "../pages/compartilhamento/";
import HomeScreenNavigator from "../pages/home";
import MedicacoesNavigator from "../pages/medicacao";
import MedicosNavigator from "../pages/medicos";
import MedicamentosNavigator from "../pages/medicamentos";



const NavigatorLoggedIn = createDrawerNavigator(
    {
        home: HomeScreenNavigator,
        medicacoesNavigator:MedicacoesNavigator,                                         
        medicosNavigator: MedicosNavigator,                                  
        compartilhamentosNavigator: CompartilhamentoNavigator,
        medicamentosNavigator: MedicamentosNavigator
    },
    {
        contentComponent      : props => 
             <SideBarMenu {...props}/>
        ,
    }    
);

export default NavigatorLoggedIn;