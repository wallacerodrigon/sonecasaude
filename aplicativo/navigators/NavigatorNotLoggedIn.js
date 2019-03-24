import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from 'react-navigation';
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../assets/estilos/estilos';
import { TELA_LOGIN, TELA_PADRAO } from '../constants/AppScreenData';
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Desafios from "../pages/cadastro/Desafios";
import Endereco from "../pages/cadastro/Endereco";
import FinalizaCadastro from "../pages/cadastro/FinalizaCadastro";
import PerfilCadastro from '../pages/cadastro/PerfilCadastro';
import CadastroCompartilhamento from "../pages/compartilhamento/CadastroCompartilhamento";
import EsqueciSenha from "../pages/esqueci-senha/EsqueciSenha";
import LoginComponent from "../pages/login/LoginComponent";



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