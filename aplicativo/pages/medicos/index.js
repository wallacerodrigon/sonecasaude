import React from "react";
import { createStackNavigator } from 'react-navigation';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import { BotaoMicrofoneHeader } from "../../components/botao/Botao";
import { TELA_LISTA_MEDICOS } from '../../constants/AppScreenData';
import AdicionaClinica from "../../pages/medicos/AdicionaClinica";
import ListaMedicos from "../../pages/medicos/ListaMedicos";
import ComandoOuvindoVoz from "../voz/ComandoOuvindoVoz";
import AdicionaMedicoTab from "./AdicionaMedicoTab";
import ProcuraMedico from "./ProcuraMedico";
import ProcuraClinica from "./ProcuraClinica";

const MedicosNavigator = createStackNavigator(
    {
        listaMedicos: {screen: ListaMedicos},                                     
        procuraMedicos: ProcuraMedico,
        adicionaMedicosTab: {screen: AdicionaMedicoTab},
        adicionaClinica: {screen: AdicionaClinica},                                    
        procuraClinica: {screen: ProcuraClinica},                                    

        comandoVoz: ComandoOuvindoVoz,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
          title: TELA_LISTA_MEDICOS.title,
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

export default MedicosNavigator;