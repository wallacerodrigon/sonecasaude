import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import Botao from '../../components/botao/Botao';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_PADRAO, TELA_HOME, TELA_ESQUECI_SENHA, TELA_DADOS_PESSOAIS} from '../../constants/AppScreenData';


const imgLogo = require('../../assets/img/logo-login.png');
 
export default class LoginComponent extends Component {
   
    static navigationOptions = {
        title: TELA_PADRAO.title
      };

    constructor(){
        super()
    }

    efetuarLogin = () => {
        this.props.navigation.navigate(TELA_HOME.name);
    }

    executarNovoCadastro= () => {
        this.props.navigation.navigate(TELA_DADOS_PESSOAIS.name);
    }

    executarEsqueciSenha = ()=> {
        this.props.navigation.navigate(TELA_ESQUECI_SENHA.name);
    }

    render() {

        return (
            <View
            style={[EstilosComuns.container]}>
            <View style={styles.header}>
                <Image source={imgLogo}/>
                <Text style={[EstilosComuns.fontePadrao, styles.headerEntrada]}>Para entrar,</Text>
                <Text style={[EstilosComuns.fontePadrao, styles.headerMensagem]}>informe seu login e senha</Text>
            </View>

            <View style={styles.central}>
                <TextInput style={styles.inputText} placeholder="Login"  maxLength = {10}></TextInput>
                <TextInput style={styles.inputText} placeholder="Senha"  maxLength = {10} secureTextEntry textContentType="password" ></TextInput>

                <Botao tituloBotao='Login'  onClick={()=>this.efetuarLogin()}/>
            </View>

            <View style={styles.footer}>
                <Botao tituloBotao='Cadastrar-me'  onClick={() => this.executarNovoCadastro()}/>
                <Botao tituloBotao='Esqueci a senha' onClick={() =>this.executarEsqueciSenha()}/>
            </View>
          </View>            
        )
    }
};


const styles = StyleSheet.create({
    header: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 3
    },

    headerEntrada: {
        fontWeight: 'bold',
        fontSize: 35,
    },
    headerMensagem: {
        fontSize: 20
    },
    central: {
        flex: 3,
        flexDirection: 'column',
        padding: 5
    },
    footer: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    inputText: {
        borderBottomWidth: 1,
        borderColor: '#666',
        textAlign: 'center'
    },
  });