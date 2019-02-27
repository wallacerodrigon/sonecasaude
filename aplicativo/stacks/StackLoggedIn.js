import React from "react";
import LoginComponent from "../pages/login/LoginComponent";
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import PADRAO_NAVEGACAO from "./StackConfigs";
import HomeScreenRouter from "../pages/home";
import HomeScreen from "../pages/home/Home";
import ControleMedicacao from "../pages/medicacao/ControleMedicacao";
import { BotaoOpacity } from "../components/botao/Botao";
import { Icon } from "native-base";
import EstilosComuns, { BRANCO } from "../assets/estilos/estilos";
import { BotaoMenu } from "../components/botao/BotaoMenu";
import { TELA_PADRAO, TELA_COMANDO_VOZ } from "../constants/AppScreenData";

const StackLoggedIn = createDrawerNavigator(
    {
        home: HomeScreen,
        controleMedicacao: {screen: ControleMedicacao},
        // adicionaCompartilhamentoMedicacao: AdicionaCompartilhamentoInfo,
        // novoCompartilhamentoInfo:  AdicionaCompartilhamentoInfo,

        // controleMedicamento: {screen: ControleMedicamento},
        // listaCompartilhamentoMedicacao: {screen: EsqueciSenha},                                    

        // alarme: {screen: Alarme},
        // comandoVoz: {screen: ComandoOuvindoVoz},                                    

        // adicionaMedicos: {screen: AdicionaMedico},
        // listaMedicos: {screen: ListaMedicos},                                    

        // meuPerfil: {screen: EsqueciSenha},                                    
        // historico: {screen: Historico},
        // adicionaClinica: {screen: AdicionaClinica},                                    
        // listaClinicas: {screen: ListaClinicas},                                            
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