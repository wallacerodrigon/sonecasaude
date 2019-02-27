import React from "react";
import {createDrawerNavigator} from 'react-navigation';
import PADRAO_NAVEGACAO from "./StackConfigs";
import HomeScreen from "../pages/home/Home";
import ControleMedicacao from "../pages/medicacao/ControleMedicacao";
import { BotaoOpacity } from "../components/botao/Botao";
import { Icon } from "native-base";
import EstilosComuns, { BRANCO } from "../assets/estilos/estilos";
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

const StackLoggedIn = createDrawerNavigator(
    {
        home: HomeScreen,
        cadastroMedicamento: CadastroMedicamento,
        controleMedicacao: {screen: ControleMedicacao},
        novoCompartilhamentoInfo:  AdicionaCompartilhamentoInfo,


        alarme: Alarme,
        comandoVoz: ComandoOuvindoVoz,                                    

        adicionaMedicos: {screen: AdicionaMedico},
        listaMedicos: {screen: ListaMedicos},                                    

        meuPerfil: {screen: MeusDados},                                    
        
        adicionaClinica: {screen: AdicionaClinica},                                    
        listaClinicas: {screen: ListaClinicas},  
        prescricaoMedicamento: PrescricaoMedicamento                                          
    },
    {
        defaultNavigationOptions: {
            title: TELA_PADRAO.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],
            headerLeft: (
                // <BotaoMenu navigation={}/>
                <BotaoOpacity onClick={() => this.props.navigation.navigate(DRAWER.name)}> 
                    <Icon name="menu" size={30} color={BRANCO}/>
                </BotaoOpacity>                 
            ),
            headerRight: (
                // <BotaoMenu navigation={}/>
                <BotaoOpacity onClick={() => this.props.navigation.navigate(TELA_COMANDO_VOZ.name)}> 
                    <Icon name="mic" size={30} color={BRANCO}/>
                </BotaoOpacity>                 
            ),
        
        },
    
                
    }    
);

export default StackLoggedIn;