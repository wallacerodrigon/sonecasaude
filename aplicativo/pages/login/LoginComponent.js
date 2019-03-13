import React, { Component } from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Image} from 'react-native';

import Botao from '../../components/botao/Botao';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_PADRAO, TELA_HOME, TELA_ESQUECI_SENHA, TELA_CADASTRO_PERFIL} from '../../constants/AppScreenData';
import CommandLink from '../../components/botao/CommandLink';
import {InputTexto} from '../../components/input/InputTexto';

import { connect } from "react-redux";

import { efetuarLoginAction, validarLoginAction, onChangeLogin, onChangeSenha } from "../../actions";
import { MensagemErro } from "../../components/mensagens/Mensagens";

const imgLogo = require('../../assets/img/logo-login.jpeg');
 
class LoginComponent extends Component {
   
    static navigationOptions = {
        title: TELA_PADRAO.title,
        header: null
      };

    constructor(props){
        super(props);
    }

    efetuarLogin() {
        //let userDto = {login: this.props.login, senha: this.props.senha};
        // this.props.validarLoginAction(userDto);
        // if (! this.props.validos ){
        //     MensagemErro("Login e senha devem ser informados!");
        //     return;
        // }
       //this.props.navigation.navigate(TELA_HOME.name);
       
//       let retorno = this.props.efetuarLoginAction(userDto);
  //     console.log('ok, efetuando login agora...', retorno);

    //    if (retorno != null){
            this.props.navigation.navigate(TELA_HOME.name);
    //    } else {
    //         MensagemErro("Login ou senha devem estar inválidos!");
    //    }
    }

    executarNovoCadastro= () => {
        this.props.navigation.navigate(TELA_CADASTRO_PERFIL.name);
    }

    executarEsqueciSenha = ()=> {
        this.props.navigation.navigate(TELA_ESQUECI_SENHA.name);
    }

    render() {

        return (
          <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={70} behavior="padding" >
            <View style={styles.header}>
                <Image source={imgLogo}/>
            </View>


            <View style={styles.central}>
                <InputTexto placeholder="E-mail ou telefone" maxLength={40}
                    onChangeInput={texto => this.props.onChangeLogin(texto)}
                    autoCapitalize="none"
                    fieldName="login"
                    keyboardType={InputTexto.KEYBOARD_EMAIL}
                    value={this.props.login}
                    />


                <InputTexto placeholder="Senha" maxLength={10} secureTextEntry
                    onChangeInput={texto => this.props.onChangeSenha(texto)}
                    autoCapitalize="none"
                    value={this.props.senha}
                    textcontextType="password"/>

                <CommandLink styles={styles.esqueceuSenha} tituloBotao="Não sabe sua senha? Clique aqui para recuperá-la." onClick={() => this.executarEsqueciSenha()}/>

                <Botao tituloBotao='Entrar'  onClick={()=>this.efetuarLogin()}/>

                <View style={styles.commandLinks}>
                    <CommandLink styles={EstilosComuns.negrito} tituloBotao="Ainda não tem uma conta? Cadastre-se" onClick={() => this.executarNovoCadastro()}/>
                </View>
            </View>

          </KeyboardAvoidingView>            
        )
    }
};

/**aqui estou fazendo um de-para de uma variavel interna com a action*/
const mapStateToProps = state => ({
    login: state.loginReducer.login,
    senha: state.loginReducer.senha,
    validos: state.loginReducer.validos
})

export default connect(mapStateToProps, { efetuarLoginAction, validarLoginAction, onChangeLogin, onChangeSenha })(LoginComponent);


const styles = StyleSheet.create({
    header: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        marginTop: 5
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
        marginBottom: 15,
        textAlign: 'center'
    }
  });