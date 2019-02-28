import React from "react";
import {createStackNavigator} from 'react-navigation';
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import CadastroMedicamento from './CadastroMedicamento';
import PrescricaoMedicamento from './PrescricaoMedicamento';

import { TELA_COMANDO_VOZ, TELA_MEDICAMENTOS } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";

const MedicamentosStack = createStackNavigator(
    {
        cadastroMedicamento: CadastroMedicamento,
        prescricaoMedicamento: PrescricaoMedicamento
    },
    {
        defaultNavigationOptions: {
            title: TELA_MEDICAMENTOS.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],
            headerRight: (
                <BotaoOpacity onClick={() => this.props.navigation.navigate(TELA_COMANDO_VOZ.name)}> 
                    <Icon name="mic" size={30} color={BRANCO}/>
                </BotaoOpacity>                 
            ),
        },
    }    
);

export default MedicamentosStack;