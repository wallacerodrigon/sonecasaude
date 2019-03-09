import React, { Component } from 'react';
import {View, KeyboardAvoidingView, StyleSheet, Image} from 'react-native';

import Botao from '../../components/botao/Botao';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_PADRAO, TELA_HOME, TELA_ESQUECI_SENHA, TELA_CADASTRO_PERFIL} from '../../constants/AppScreenData';
import CommandLink from '../../components/botao/CommandLink';
import {InputTexto} from '../../components/input/InputTexto';

import { connect } from "react-redux";

import { efetuarLoginAction, validarLoginAction } from "../../actions";

const imgLogo = require('../../assets/img/logo-login.jpeg');
 
class LoginComponent extends Component {
   
    static navigationOptions = {
        title: TELA_PADRAO.title,
        header: null
      };

    constructor(props){
        super(props);

        this.state= {
            login: '', senha: ''
        };

    }

    isVazio(texto){
        return texto == null || texto == undefined || texto == '';
    }

    efetuarLogin = () => {
       /* if (this.isVazio(this.state.login) || this.isVazio(this.state.senha)){
            MensagemErro("Login e senha devem ser informados!");
            return;
        }*/
       //this.props.navigation.navigate(TELA_HOME.name);
       
       let retorno = this.props.efetuarLogin({login: this.props.login, senha: this.props.senha});
       console.log(retorno);

    //    if (retorno != null){
    //        this.props.navigation.navigate(TELA_HOME.name);
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

    onChangeLogin(text){
        this.setState({login: text});
    }

    onChangeSenha(text){
        this.setState({senha: text});
    }

    onChangeField(field, value){
        this.setState({[field]: value});
    }

    render() {

        return (
          <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={70} behavior="padding" >
            <View style={styles.header}>
                <Image source={imgLogo}/>
            </View>


            <View style={styles.central}>
                <InputTexto placeholder="E-mail ou telefone" maxLength={40}
                   // onChangeInput={this.onChangeLogin}
                    autoCapitalize="none"
                    keyboardType={InputTexto.KEYBOARD_EMAIL}
                    value={this.props.login}
                    />


                <InputTexto placeholder="Senha" maxLength={10} secureTextEntry
                   // onChangeInput={texto => this.props.onChangeField('senha', texto)}
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
    senha: state.loginReducer.senha
})

const mapDispatchToProps = ({
    validarLogin: validarLoginAction,
    efetuarLogin: efetuarLoginAction
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);


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
        alignItems: 'center'
    }
  });