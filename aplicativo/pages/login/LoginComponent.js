import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { connect } from "react-redux";
import { buscarDesafios, buscarGrausParentesco, efetuarLoginAction, onChangeField } from "../../actions/LoginAction";
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import CommandLink from '../../components/botao/CommandLink';
import { InputTexto } from '../../components/input/InputTexto';
import { TELA_CADASTRO_PERFIL, TELA_ESQUECI_SENHA, TELA_HOME, TELA_PADRAO } from '../../constants/AppScreenData';



//import { MensagemErro } from "../../components/mensagens/Mensagens";


const imgLogo = require('../../assets/img/logo-login.jpeg');
 
class LoginComponent extends Component {
   
    static navigationOptions = {
        title: TELA_PADRAO.title,
        header: null
      };

    constructor(props){
        super(props);
    }

    componentDidMount(){
       // this.props.buscarDesafios();
       // this.props.buscarGrausParentesco();
    }

    efetuarLogin() {
            this.props.navigation.navigate(TELA_HOME.name);
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
                    onChangeInput={texto => this.props.onChangeField('login', texto)}
                    autoCapitalize="none"
                    fieldName="login"
                    keyboardType={InputTexto.KEYBOARD_EMAIL}
                    value={this.props.login}
                    />


                <InputTexto placeholder="Senha" maxLength={10} secureTextEntry
                    onChangeInput={texto => this.props.onChangeField('senha', texto)}
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

export default connect(
    mapStateToProps, 
    { efetuarLoginAction, onChangeField, buscarDesafios, buscarGrausParentesco })
(LoginComponent);


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