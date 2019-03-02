import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { TELA_PADRAO, VOLTA_LOGIN } from "../constants/AppScreenData";
import EstilosComuns, { BRANCO } from "../assets/estilos/estilos";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Endereco from "../pages/cadastro/Endereco";

import Desafios from "../pages/cadastro/Desafios";
import AdicionaCompartilhamentoInfo from "../pages/cadastro/AdicionaCompartilhamentoInfo";
import FinalizaCadastro from "../pages/cadastro/FinalizaCadastro";
import { View, Icon } from 'native-base';
import { BotaoOpacity } from '../components/botao/Botao';
import PerfilCadastro from '../pages/cadastro/PerfilCadastro';

const CadastroStack = createStackNavigator(
    {
        cadastroPerfil: PerfilCadastro,
        dadosPessoais: DadosPessoais,
        endereco: Endereco,
        desafios: Desafios,
        adicionaCompartilhamentoInfo: AdicionaCompartilhamentoInfo,
        finalizaCadastro: FinalizaCadastro, 
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO
    }    

)
export default CadastroStack;