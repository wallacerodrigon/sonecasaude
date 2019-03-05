import React from "react";
import {createDrawerNavigator} from 'react-navigation';
import HomeScreenNavigator from "../pages/home";

import MeusDados from "../pages/perfil/MeusDados";
import ComandoOuvindoVoz from "../pages/voz/ComandoOuvindoVoz";
import SideBarMenu from "../components/menu/SideBarMenu";
import Alarme from '../pages/alarme/Alarme';

import MedicosNavigator from '../pages/medicos';
import MedicamentosNavigator from "../pages/medicamentos";
import MedicacoesNavigator from "../pages/medicacao";
import CompartilhamentoNavigator from "../pages/compartilhamento/";

const NavigatorLoggedIn = createDrawerNavigator(
    {
        home: HomeScreenNavigator,
        
        alarme: Alarme,
        alarmeEstoque: Alarme,
        comandoVoz: ComandoOuvindoVoz,                                    
        listaCompartilhamento: CompartilhamentoNavigator,
        meuPerfil: MeusDados, //tem que criar um navigator  
        medicos: MedicosNavigator,
        medicamentos: MedicamentosNavigator,
        medicacoes:MedicacoesNavigator                                         
    },
    {
        contentComponent      : props => 
             <SideBarMenu {...props}/>
        ,
        
                
    }    
);

export default NavigatorLoggedIn;