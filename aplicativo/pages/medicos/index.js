import React from "react";
import {createStackNavigator} from 'react-navigation';
import EstilosComuns, { BRANCO, VERDE, FUNDO } from "../../assets/estilos/estilos";

import AdicionaClinica from "../../pages/medicos/AdicionaClinica";
import ListaClinicas from "../../pages/medicos/ListaClinicas";
import ListaMedicos from "../../pages/medicos/ListaMedicos";
import AdicionaMedico from "../../pages/medicos/AdicionaMedico";
import { TELA_LISTA_MEDICOS, TELA_COMANDO_VOZ } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";
import { PADRAO_NAVEGACAO } from "../../stacks/StackConfigs";

const MedicosNavigator = createStackNavigator(
    {
        listaMedicos: {screen: ListaMedicos},                                    
        adicionaMedicos: {screen: AdicionaMedico},

        adicionaClinica: {screen: AdicionaClinica},                                    
        listaClinicas: {screen: ListaClinicas},  
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO
    }    
);

export default MedicosNavigator;