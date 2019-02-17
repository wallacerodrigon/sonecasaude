import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';

import Botao from '../../components/botao/Botao';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_PADRAO, TELA_HOME, TELA_ESQUECI_SENHA, TELA_DADOS_PESSOAIS} from '../../constants/AppScreenData';
import CommandLink from '../../components/botao/CommandLink';


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
          <View style={[EstilosComuns.container]}>
            <View style={styles.header}>
                <Image source={imgLogo}/>
            </View>

            <View style={styles.central}>
                <TextInput style={styles.inputText} placeholder="E-mail ou telefone"  maxLength = {10}
                    inlineImageLeft="search_icon" //verificar...
                ></TextInput>
                <TextInput style={styles.inputText} placeholder="Senha"  maxLength={10} secureTextEntry textContentType="password" ></TextInput>

                <Botao tituloBotao='Entrar'  onClick={()=>this.efetuarLogin()}/>
                <CommandLink tituloBotao="Não sabe sua senha? Clique aqui e vamos recuperá-la" onClick={() => this.executarEsqueciSenha()}/>
                <CommandLink tituloBotao="Não tem uma conta? Cadastre-se aqui." onClick={() => this.executarNovoCadastro()}/>
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