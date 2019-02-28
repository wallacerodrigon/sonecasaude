import React from "react";
import {createDrawerNavigator} from 'react-navigation';
import HomeScreen from "../pages/home/Home";
import EstilosComuns, { BRANCO, VERDE, FUNDO } from "../assets/estilos/estilos";

import MeusDados from "../pages/perfil/MeusDados";
import ComandoOuvindoVoz from "../pages/voz/ComandoOuvindoVoz";
import SideBarMenu from "../components/menu/SideBarMenu";
import Alarme from '../pages/alarme/Alarme';

const StackLoggedIn = createDrawerNavigator(
    {
        home: HomeScreen,
        
        alarme: Alarme,
        alarmeEstoque: Alarme,
        comandoVoz: ComandoOuvindoVoz,                                    
        
        meuPerfil: {screen: MeusDados},                                    
    },
    {
        contentOptions: {
            activeTintColor: VERDE,
            activeBackgroundColor: FUNDO
          },  
        contentComponent      : props => 
             <SideBarMenu {...props}/>
        ,
                
    }    
);

export default StackLoggedIn;