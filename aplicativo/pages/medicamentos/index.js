import { createStackNavigator } from 'react-navigation';
import { PADRAO_NAVEGACAO } from "../../navigators/NavigatorConfigs";
import CadastroMedicamento from './CadastroMedicamento';
import PrescricaoMedicamento from './PrescricaoMedicamento';
import { TELA_CADASTRO_MEDICAMENTO } from '../../constants/AppScreenData';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import React from "react";
import { BotaoMicrofoneHeader } from '../../components/botao/Botao';
import ComandoOuvindoVoz from '../voz/ComandoOuvindoVoz';

const MedicamentosNavigator = createStackNavigator(
    {
        cadastroMedicamento: CadastroMedicamento,
        prescricaoMedicamento: PrescricaoMedicamento,
        comandoVoz: ComandoOuvindoVoz
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
          title: TELA_CADASTRO_MEDICAMENTO.title,
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