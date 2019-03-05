import React from "react";
import {createStackNavigator} from 'react-navigation';
import EstilosComuns, { BRANCO, VERDE, FUNDO } from "../../assets/estilos/estilos";

import { TELA_LISTA_MEDICOS, TELA_COMANDO_VOZ, TELA_CADASTRO_MEDICAMENTO, TELA_CONTROLE_MEDICACAO } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";
import ControleMedicacao from "./ControleMedicacao";
import AdicionaCompartilhamentoInfo from "../cadastro/AdicionaCompartilhamentoInfo";
import CompartilhaInformacoes from "../cadastro/CompartilhaInformacoes";
import Historico from "./Historico";
import MedicamentosStack from "../medicamentos";
import CadastroMedicamento from "../medicamentos/CadastroMedicamento";
import HomeScreen from "../home/Home";
import { PADRAO_NAVEGACAO } from "../../stacks/StackConfigs";

const MedicacoesNavigator = createStackNavigator(
    {
        controleMedicacao: {screen: ControleMedicacao},
        novoCompartilhamentoInfo:  AdicionaCompartilhamentoInfo,
        compartilhaInformacoes: CompartilhaInformacoes,

        historicoMedicacao: Historico,
        adicionaCompartilhamentoMedicacao: AdicionaCompartilhamentoInfo,
        cadastroMedicamento: CadastroMedicamento,
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO,
        
    }    
);

export default MedicacoesNavigator;