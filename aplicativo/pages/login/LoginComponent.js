import React, { Component } from 'react';
import {View, StyleSheet, Image, Alert} from 'react-native';

import Botao from '../../components/botao/Botao';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_PADRAO, TELA_HOME, TELA_ESQUECI_SENHA, TELA_DADOS_PESSOAIS} from '../../constants/AppScreenData';
import CommandLink from '../../components/botao/CommandLink';
import InputTexto from '../../components/input/InputTexto';


const imgLogo = require('../../assets/img/logo-login.png');
 
export default class LoginComponent extends Component {
   
    static navigationOptions = {
        title: TELA_PADRAO.title,
        header: null
      };

    constructor(){
        super()

        this.state= {
            login: '', senha: ''
        };
    }

    isVazio(texto){
        return texto == null || texto == undefined || texto == '';
    }

    efetuarLogin = () => {

       /* if (this.isVazio(this.state.login) || this.isVazio(this.state.senha)){
            //criar um componente de mensagem para cada tipo
            Alert.alert(
                'Atenção!',
                'Campo login e senha devem ser informados!',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
              );            
            return;
        }*/
        this.props.navigation.navigate(TELA_HOME.name);
    }

    executarNovoCadastro= () => {
        this.props.navigation.navigate(TELA_DADOS_PESSOAIS.name);
    }

    executarEsqueciSenha = ()=> {
        this.props.navigation.navigate(TELA_ESQUECI_SENHA.name);
    }

    tratarInputLogin(text){
        //alert(text);
        //this.setState({login: text});
    }

    tratarInputSenha(text){
       // this.setState({senha: text.value});
      // alert('senha')
    }

    render() {

        return (
          <View style={[EstilosComuns.container]}>
            <View style={styles.header}>
                <Image source={imgLogo}/>
            </View>

            <View style={styles.central}>
                <InputTexto placeholder="E-mail ou telefone" maxLength={40}
                    onChangeInput={value => this.tratarInputLogin(value)}
                    textcontextType="password"/>


                <InputTexto placeholder="Senha" maxLength={10} secureTextEntry
                    onChangeInput={value => this.tratarInputSenha(value)}
                    textcontextType="password"/>

                <CommandLink styles={styles.esqueceuSenha} tituloBotao="Não sabe sua senha? Clique aqui e vamos recuperá-la" onClick={() => this.executarEsqueciSenha()}/>

                <Botao tituloBotao='Entrar'  onClick={()=>this.efetuarLogin()}/>

                <View style={styles.commandLinks}>
                    <CommandLink styles={EstilosComuns.negrito} tituloBotao="Não tem uma conta? Cadastre-se aqui." onClick={() => this.executarNovoCadastro()}/>
                </View>
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
        padding: 10
    },
    footer: {
        flex: 1,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
  
    commandLinks: {
        fontSize: 12,
        marginTop: 15
    },
    esqueceuSenha: {
         
        marginTop: 15,
        marginBottom: 15
    }
  });