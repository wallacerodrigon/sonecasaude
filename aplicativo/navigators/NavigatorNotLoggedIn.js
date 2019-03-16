import {createStackNavigator} from 'react-navigation';
import React from "react";
import PADRAO_NAVEGACAO from "./NavigatorConfigs";

import LoginComponent from "../pages/login/LoginComponent";
import PerfilCadastro from '../pages/cadastro/PerfilCadastro';
import EsqueciSenha from "../pages/esqueci-senha/EsqueciSenha";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Endereco from "../pages/cadastro/Endereco";
import Desafios from "../pages/cadastro/Desafios";
import CadastroCompartilhamento from "../pages/compartilhamento/CadastroCompartilhamento";
import FinalizaCadastro from "../pages/cadastro/FinalizaCadastro";

import { Text } from "react-native";
import Botao from '../components/botao/Botao';
import { TELA_PADRAO, TELA_LOGIN } from '../constants/AppScreenData';
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../assets/estilos/estilos';

const StackNotLoggedIn = createStackNavigator(
    {
       login: {screen: LoginComponent},
        cadastroPerfil: PerfilCadastro,
        esqueciSenha: {screen: EsqueciSenha},
        dadosPessoais: DadosPessoais,
        endereco: Endereco,
        desafios: Desafios,
        cadastroCompartilhamento: CadastroCompartilhamento,
       finalizaCadastro: FinalizaCadastro,         
    },
    {
        defaultNavigationOptions: ({navigation})=> ({
            title: TELA_PADRAO.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            headerTintColor: BRANCO,
            cardShadowEnabled: "true",
            borderBottomColor: FUNDO_ESCURO,
            headerTitleStyle: {
                color: BRANCO,
                fontSize: 18
            },
            headerRight: (
                <Text style={{paddingVertical: 10, paddingHorizontal: 10, color: BRANCO, fontSize: 18, fontWeight:'bold' }} 
                    onPress={() => navigation.navigate(TELA_LOGIN.name)}>Sair</Text>
            )
        })
            
        
       
    }    
);

export default StackNotLoggedIn;