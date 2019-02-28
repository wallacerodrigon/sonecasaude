import React from "react";
import {createDrawerNavigator} from 'react-navigation';
import PADRAO_NAVEGACAO from "./StackConfigs";
import HomeScreen from "../pages/home/Home";
import ControleMedicacao from "../pages/medicacao/ControleMedicacao";
import { BotaoOpacity } from "../components/botao/Botao";
import { Icon } from "native-base";
import EstilosComuns, { BRANCO, VERDE, FUNDO } from "../assets/estilos/estilos";
import { BotaoMenu } from "../components/botao/BotaoMenu";
import { TELA_PADRAO, TELA_COMANDO_VOZ } from "../constants/AppScreenData";

import MeusDados from "../pages/perfil/MeusDados";
import AdicionaClinica from "../pages/medicos/AdicionaClinica";
import ListaClinicas from "../pages/medicos/ListaClinicas";
import ListaMedicos from "../pages/medicos/ListaMedicos";
import AdicionaMedico from "../pages/medicos/AdicionaMedico";
import AdicionaCompartilhamentoInfo from "../pages/cadastro/AdicionaCompartilhamentoInfo";
import CadastroMedicamento from "../pages/medicacao/CadastroMedicamento";
import Alarme from "../pages/medicacao/Alarme";
import ComandoOuvindoVoz from "../pages/voz/ComandoOuvindoVoz";
import PrescricaoMedicamento from "../pages/medicacao/PrescricaoMedicamento";
import SideBarMenu from "../components/menu/SideBarMenu";
import CompartilhaInformacoes from "../pages/cadastro/CompartilhaInformacoes";

const StackLoggedIn = createDrawerNavigator(
    {
        home: HomeScreen,
        cadastroMedicamento: CadastroMedicamento,
        controleMedicacao: {screen: ControleMedicacao},
        novoCompartilhamentoInfo:  AdicionaCompartilhamentoInfo,
        compartilhaInformacoes: CompartilhaInformacoes,

        alarme: Alarme,
        comandoVoz: ComandoOuvindoVoz,                                    

        meuPerfil: {screen: MeusDados},                                    
        prescricaoMedicamento: PrescricaoMedicamento                                          
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