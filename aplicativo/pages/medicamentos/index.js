import React from "react";
import { createStackNavigator } from 'react-navigation';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import { BotaoMicrofoneHeader } from '../../components/botao/Botao';
import { TELA_LISTA_MEDICAMENTOS } from '../../constants/AppScreenData';
import ComandoOuvindoVoz from '../voz/ComandoOuvindoVoz';
import ListaMedicamentos from './ListaMedicamentos';
import PeriodicidadeMedicamento from './PeriodicidadeMedicamento';
import PrescricaoMedicamento from './PrescricaoMedicamento';
import DetalheMedicamentos from "./DetalheMedicamentos";

const MedicamentosNavigator = createStackNavigator(
    {
       listaMedicamentos: ListaMedicamentos,
        prescricaoMedicamento: PrescricaoMedicamento,
       periodicidadeMedicamento: PeriodicidadeMedicamento,
        comandoVoz: ComandoOuvindoVoz,
        detalheMedicamentos:  DetalheMedicamentos
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
          title: TELA_LISTA_MEDICAMENTOS.title,
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

export default MedicamentosNavigator;