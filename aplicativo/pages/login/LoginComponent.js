import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { connect } from "react-redux";
import { efetuarLoginAction, onChangeField } from "../../actions/LoginAction";
import EstilosComuns, { VERDE } from '../../assets/estilos/estilos';
import Botao, {BotaoLoading} from '../../components/botao/Botao';
import CommandLink from '../../components/botao/CommandLink';
import { InputTexto, InputTextComMascara } from '../../components/input/InputTexto';
import { TELA_CADASTRO_PERFIL, TELA_ESQUECI_SENHA, TELA_HOME, TELA_PADRAO } from '../../constants/AppScreenData';

import { MensagemErro } from "../../components/mensagens/Mensagens";
import Validador from '../../utilitarios/Validador';


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
    }
    
    //mudar para o receive props
    componentDidUpdate(){
        if (this.props.bolSucesso){
            // dados do usuário logado: Object {
            //     "bolCuidador": false,
            //     "bolPaciente": true,
            //     "dadosImagemFoto": "dados da foto",
            //     "nomePerfil": "Paciente",
            //     bolTrocaSenha: true
            //     "nomeUsuario": "Francisco Camilo de Sousa",
            //     "token": "eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE1NTMxODc1NTgsInN1YiI6InRydWVAMTAwMEBmYWxzZUAiLCJqdGkiOiIzIiwiZXhwIjoxNTUzMTg5MzU4fQ.CNVPXeeQIuhBE-dUlEixGIKC_I5i3d446sYGS2bglNMJlebn3bkQihDtin9SvYzKe4StuElO46oL2VirIReEgQ",
            //     "xsrf": "F73AC862D70C9AFFD20FF210FED127153B7D54C106D8901FAAC6FCFFDB3ED9D7",
            //   }
              
            this.props.navigation.navigate(TELA_HOME.name, {dadosUsuario: this.props.dadosUsuario});
        } else if (this.props.mensagemFalha != ''){
            MensagemErro(this.props.mensagemFalha);
        }
    }

    efetuarLogin() {
        if (this.props.login == null || this.props.login.trim() === ''){
            MensagemErro('Favor informar o seu login');
            return false;
        }

        if (this.props.senha == null || this.props.senha.trim() === ''){
            MensagemErro('Favor informar a sua senha de acesso');
            return false;
        }

        if (! new Validador().validaCPF(this.props.login)){
            MensagemErro('Informe um CPF válido!');
            return false;
        }

        this.props.efetuarLoginAction({
            login: this.props.login, 
            senha: this.props.senha
        })
    }

    executarNovoCadastro= () => {
        this.props.navigation.navigate(TELA_CADASTRO_PERFIL.name);
    }

    executarEsqueciSenha = ()=> {
        this.props.navigation.navigate(TELA_ESQUECI_SENHA.name);
    }

    renderBotao(){
        if (this.props.loading){
            return <ActivityIndicator size="small" color={VERDE}/>
        } else {
            return <Botao tituloBotao='Entrar'  onClick={()=>this.efetuarLogin()}/>
        }

    }

    render() {

        return (
          <KeyboardAvoidingView style={[EstilosComuns.container]} keyboardVerticalOffset={70} behavior="padding" enabled>
            <View style={styles.header}>
                <Image source={imgLogo}/>
            </View>


            <View style={styles.central}>
                <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.props.onChangeField('login', text)}
                        value={this.props.login}
                        placeholder="Informe seu CPF"
                        type={InputTextComMascara.MASK_CPF}
                    />

                <InputTexto placeholder="Senha" maxLength={20} secureTextEntry
                    onChangeInput={texto => this.props.onChangeField('senha', texto)}
                    autoCapitalize="none"
                    value={this.props.senha}
                    textcontextType="password"/>

                <CommandLink styles={styles.esqueceuSenha} tituloBotao="Não sabe sua senha? Clique aqui para recuperá-la." onClick={() => this.executarEsqueciSenha()}/>

                <BotaoLoading onClick={() => this.efetuarLogin()} carregaLoading={this.props.loading} tituloBotao="Enviar"/>

                <View style={styles.commandLinks}>
                    <CommandLink styles={EstilosComuns.negrito} tituloBotao="Ainda não tem uma conta? Cadastre-se" onClick={() => this.executarNovoCadastro()}/>
                </View>
            </View>

          </KeyboardAvoidingView>            
        )
    }
};

/**aqui estou fazendo um de-para de uma variavel interna com a action*/
const mapStateToProps = state => {
    const dadosUsuario = state.loginReducer.dadosUsuario;

    return {
        login: state.loginReducer.login,
        senha: state.loginReducer.senha,
        validos: state.loginReducer.validos,

        mensagemFalha: state.loginReducer.mensagemFalha,
        loading: state.loginReducer.loading,
        bolSucesso: state.loginReducer.bolSucesso,
        dadosUsuario: dadosUsuario
    }
}

export default connect(
    mapStateToProps, 
    {efetuarLoginAction, onChangeField })
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