import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import EstilosComuns, { VERDE } from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_ESQUECI_SENHA, TELA_LOGIN } from '../../constants/AppScreenData';
import {InputTexto} from '../../components/input/InputTexto';

import {connect} from "react-redux";
import { recuperarSenha, onChangeEmail } from "../../actions/EsqueciSenhaAction";
import { MensagemErro, MensagemInformativa } from "../../components/mensagens/Mensagens";
import Validador from "../../utilitarios/Validador";

class EsqueciSenha extends React.Component {
    static navigationOptions = {
        title: TELA_ESQUECI_SENHA.title,
      };


    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        if (this.props.executado && this.props.sucesso){
            MensagemInformativa("Encaminhamos um e-mail com um link para ativação da sua nova senha!"); 
            this.props.navigation.navigate(TELA_LOGIN.name);   
        } else if (this.props.executado && this.props.mensagemFalha) {
            MensagemErro(this.props.mensagemFalha); 
        }
    }

    onRecuperarSenha(){
        if (this.props.email.trim() === ''){
            MensagemErro('Favor informar o e-mail para recuperar a senha!');
            return false;
        }

        if (! new Validador().isEmailValido(this.props.email)){
            MensagemErro('Favor informar um e-mail válido!');
            return false;
        }

        this.props.recuperarSenha(this.props.email)
    }

    renderBotao(){
        if (this.props.loading){
            return <ActivityIndicator size="small" color={VERDE}/>
        } else {
            return <Botao style={styles.botaoEnviar} tituloBotao='Enviar' onClick={() => this.onRecuperarSenha()}/>
        }
    }


    render() {
        return (
            <View style={[EstilosComuns.container]}>
                <View style={{flex: 1}}>
                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.textoTamanhoPadrao]}>
                        Para recuperar sua senha, informe o seu e-mail de cadastro. Você receberá no e-mail um link para ativação de uma nova senha.

                    </Text>
                </View>

                <View style={{flex: 1, padding: 6}}>
                    <InputTexto placeholder="Informe seu E-mail " maxLength={40}
                        onChangeInput={value => this.props.onChangeEmail(value)}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        />
                </View>

                <View style={{flex: 8}}>
                    {this.renderBotao()}                
                </View>
               
            </View>
        )
    };
}

//mapeia os campos do state do reducer com uma variável para uso interno na tela: 1o campo
const mapStateToProps = state => ({
    email: state.esqueciSenhaReducer.email,
    loading: state.esqueciSenhaReducer.loading,
    mensagemFalha: state.esqueciSenhaReducer.mensagemFalha,
    sucesso: state.esqueciSenhaReducer.sucesso,
    executado: state.esqueciSenhaReducer.executado
})

//conecta o componente com o redux
export default connect(
    mapStateToProps, 
    { recuperarSenha,onChangeEmail } //métodos da action a ser usada
)(EsqueciSenha);

const styles = StyleSheet.create({
    containerEsqueciSenha: {
        marginTop: 10,
    },
    botaoEnviar: {
        marginTop: 15
    }
})