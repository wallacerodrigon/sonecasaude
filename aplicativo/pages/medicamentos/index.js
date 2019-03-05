import React from "react";
import {createStackNavigator} from 'react-navigation';
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import CadastroMedicamento from './CadastroMedicamento';
import PrescricaoMedicamento from './PrescricaoMedicamento';

import { TELA_COMANDO_VOZ, TELA_MEDICAMENTOS } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";
import { PADRAO_NAVEGACAO } from "../../stacks/StackConfigs";

const MedicamentosNavigator = createStackNavigator(
    {
        cadastroMedicamento: CadastroMedicamento,
        prescricaoMedicamento: PrescricaoMedicamento
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO
    }    
);

export default MedicamentosNavigator;